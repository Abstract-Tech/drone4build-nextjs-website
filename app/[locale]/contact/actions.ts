"use server";

import { routing, type AppLocale } from "@/i18n/routing";
import { sendContactEmail } from "@/lib/contact-mail";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { z } from "zod";

type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
    form?: string;
  };
  fields?: {
    name?: string;
    email?: string;
    message?: string;
  };
};

function createContactSchema(t: Awaited<ReturnType<typeof getTranslations>>) {
  return z.object({
    name: z
      .string()
      .trim()
      .min(1, t("validation.nameRequired"))
      .min(2, t("validation.nameMin"))
      .max(100, t("validation.nameMax")),
    email: z
      .string()
      .trim()
      .min(1, t("validation.emailRequired"))
      .email(t("validation.emailInvalid"))
      .max(254, t("validation.emailMax")),
    message: z
      .string()
      .trim()
      .min(1, t("validation.messageRequired"))
      .min(10, t("validation.messageMin"))
      .max(3000, t("validation.messageMax")),
  });
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const requestedLocale = String(formData.get("locale") ?? "");
  const locale: AppLocale = hasLocale(routing.locales, requestedLocale)
    ? requestedLocale
    : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "contact.form" });

  // Verify reCAPTCHA token
  const recaptchaToken = String(formData.get("recaptchaToken") ?? "");
  if (!recaptchaToken) {
    return {
      success: false,
      message: t("status.validation"),
      errors: { form: t("status.recaptchaFailed") },
      fields: {},
    };
  }

  const recaptchaRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY!,
        response: recaptchaToken,
      }),
    },
  );
  const recaptchaData = (await recaptchaRes.json()) as {
    success: boolean;
    score: number;
  };

  if (!recaptchaData.success || recaptchaData.score < 0.5) {
    return {
      success: false,
      message: t("status.validation"),
      errors: { form: t("status.recaptchaFailed") },
      fields: {},
    };
  }

  const contactSchema = createContactSchema(t);
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const issues = parsed.error.flatten().fieldErrors;
    return {
      success: false,
      message: t("status.validation"),
      errors: {
        name: issues.name?.[0],
        email: issues.email?.[0],
        message: issues.message?.[0],
      },
      fields: {
        name: raw.name,
        email: raw.email,
        message: raw.message,
      },
    };
  }

  try {
    await sendContactEmail(parsed.data);

    return {
      success: true,
      message: t("status.success"),
      errors: {},
      fields: {},
    };
  } catch (error) {
    console.error("Contact form delivery failed", error);

    return {
      success: false,
      message: t("status.error"),
      errors: {
        form: t("status.deliveryUnavailable"),
      },
      fields: {
        name: parsed.data.name,
        email: parsed.data.email,
        message: parsed.data.message,
      },
    };
  }
}
