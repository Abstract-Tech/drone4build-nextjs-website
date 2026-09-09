"use client";

import { useActionState, useCallback, useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { submitContactForm } from "./actions";
import Button from "@/components/ui/button";
import { FieldError } from "@/components/ui/form/error";
import Input from "@/components/ui/form/input";
import Textarea from "@/components/ui/form/textarea";

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

const initialContactFormState: ContactFormState = {
  success: false,
  message: "",
  errors: {},
  fields: {},
};

export default function ContactForm() {
  const locale = useLocale();
  const t = useTranslations("contact.form");
  const formRef = useRef<HTMLFormElement>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactFormState,
  );

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!executeRecaptcha) return;

      const token = await executeRecaptcha("contact_form");
      const formData = new FormData(formRef.current!);
      formData.set("recaptchaToken", token);
      formAction(formData);
    },
    [executeRecaptcha, formAction],
  );

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
      <input type="hidden" name="locale" value={locale} />

      {state.message ? (
        <div
          className={
            state.success
              ? "rounded-[var(--radius-lg)] border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
              : "rounded-[var(--radius-lg)] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          }
          aria-live="polite"
        >
          {state.message}
          {!state.success && state.errors?.form ? (
            <FieldError className="mt-1 text-red-700">
              {state.errors.form}
            </FieldError>
          ) : null}
        </div>
      ) : null}

      <Input
        label={t("labels.name")}
        id="name"
        name="name"
        type="text"
        placeholder={t("labels.name")}
        defaultValue={state.fields?.name ?? ""}
        aria-invalid={Boolean(state.errors?.name)}
        error={state.errors?.name}
      />

      <Input
        label={t("labels.email")}
        id="email"
        name="email"
        type="email"
        placeholder={t("labels.email")}
        defaultValue={state.fields?.email ?? ""}
        aria-invalid={Boolean(state.errors?.email)}
        error={state.errors?.email}
      />

      <Textarea
        label={t("labels.message")}
        id="message"
        name="message"
        rows={5}
        placeholder={t("labels.message")}
        defaultValue={state.fields?.message ?? ""}
        aria-invalid={Boolean(state.errors?.message)}
        error={state.errors?.message}
        className="resize-none"
      />

      <Button type="submit" disabled={pending}>
        {t("labels.submit")}
      </Button>
    </form>
  );
}
