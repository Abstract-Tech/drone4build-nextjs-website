import ContactForm from "./ContactForm";
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations("contact");

  return (
    <main className="flex flex-col py-16 drone-page">
      <div className="max-w-4xl mx-auto bg-white shadow-soft rounded-[var(--radius-xl)] p-10 border border-[var(--border-soft)]">
        <h1 className="text-4xl mb-4 text-[var(--brand-blue)]">
          {t("title")}
        </h1>

        <p className="text-[var(--text-muted)] mb-8">
          {t("description")}
        </p>

        <ContactForm />
      </div>
    </main>
  );
}
