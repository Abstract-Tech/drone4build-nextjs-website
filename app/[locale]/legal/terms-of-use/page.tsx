import { getMessages } from "next-intl/server";
import { renderLinkedText } from "@/components/LinkedText";

type TermsItem = {
  title?: string;
  text: string;
};

type TermsSection = {
  title: string;
  items: TermsItem[];
};

type TermsMessages = {
  title: string;
  intro: string[];
  sections: TermsSection[];
};

export default async function TermsOfUsePage() {
  const messages = await getMessages();
  const terms = messages.termsOfUsePage as TermsMessages;

  return (
    <article className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-soft text-[var(--brand-blue)]">
      <h1 className="text-3xl mb-4 text-[var(--brand-blue)]">
        {terms.title}
      </h1>

      {terms.intro.map((paragraph) => (
        <p key={paragraph} className="mb-4">
          {paragraph}
        </p>
      ))}

      {terms.sections.map((section) => (
        <section key={section.title}>
          <h2 className="text-2xl mt-8 mb-2 text-[var(--brand-orange)]">
            {section.title}
          </h2>
          {section.items.map((item) => (
            <p key={`${item.title ?? ""}-${item.text}`} className="mb-4">
              {item.title && <strong>{item.title}: </strong>}
              {renderLinkedText(item.text)}
            </p>
          ))}
        </section>
      ))}
    </article>
  );
}
