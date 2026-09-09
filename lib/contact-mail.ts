import nodemailer from "nodemailer";
import { z } from "zod";

const smtpEnvSchema = z.object({
  SMTP_HOST: z.string().trim().min(1, "SMTP_HOST is required."),
  SMTP_PORT: z.coerce.number().int().min(1).max(65535),
  SMTP_USER: z.string().trim().min(1, "SMTP_USER is required."),
  SMTP_PASS: z.string().min(1, "SMTP_PASS is required."),
  CONTACT_TO_EMAIL: z
    .string()
    .trim()
    .min(1, "CONTACT_TO_EMAIL is required.")
    .email("CONTACT_TO_EMAIL must be a valid email address."),
  CONTACT_FROM_EMAIL: z
    .string()
    .trim()
    .min(1, "CONTACT_FROM_EMAIL is required.")
    .email("CONTACT_FROM_EMAIL must be a valid email address."),
  CONTACT_FROM_NAME: z.string().trim().optional(),
  SMTP_SECURE: z.enum(["true", "false"]).optional(),
});

type ContactMailInput = {
  name: string;
  email: string;
  message: string;
};

let transport:
  | nodemailer.Transporter<nodemailer.SentMessageInfo>
  | undefined;
let smtpConfig: z.infer<typeof smtpEnvSchema> | undefined;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getSmtpConfig() {
  if (smtpConfig) {
    return smtpConfig;
  }

  smtpConfig = smtpEnvSchema.parse({
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    SMTP_SECURE: process.env.SMTP_SECURE,
    CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
    CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
    CONTACT_FROM_NAME: process.env.CONTACT_FROM_NAME,
  });

  return smtpConfig;
}

function getTransport() {
  if (transport) {
    return transport;
  }

  const config = getSmtpConfig();

  transport = nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: config.SMTP_PORT,
    secure:
      config.SMTP_SECURE != null
        ? config.SMTP_SECURE === "true"
        : config.SMTP_PORT === 465,
    auth: {
      user: config.SMTP_USER,
      pass: config.SMTP_PASS,
    },
  });

  return transport;
}

export async function sendContactEmail({
  name,
  email,
  message,
}: ContactMailInput) {
  const config = getSmtpConfig();
  const mailTransport = getTransport();
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
  const fromName = config.CONTACT_FROM_NAME?.trim() || "Drone4Build Website";

  await mailTransport.sendMail({
    from: {
      name: fromName,
      address: config.CONTACT_FROM_EMAIL,
    },
    to: config.CONTACT_TO_EMAIL,
    replyTo: {
      name,
      address: email,
    },
    subject: `New contact form submission from ${name}`,
    text: [
      "A new contact form submission was received.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n"),
    html: [
      "<p>A new contact form submission was received.</p>",
      `<p><strong>Name:</strong> ${safeName}</p>`,
      `<p><strong>Email:</strong> ${safeEmail}</p>`,
      `<p><strong>Message:</strong><br />${safeMessage}</p>`,
    ].join(""),
  });
}
