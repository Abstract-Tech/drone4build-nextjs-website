import { getMessages } from "next-intl/server";
import { renderLinkedText } from "@/components/LinkedText";

type SummaryBlock = {
  title: string;
  lines: string[];
  paragraph?: string;
};

type LegalNoticeSection = {
  title: string;
  paragraphs: string[];
};

type LegalNoticeMessages = {
  title: string;
  summaryBlocks: SummaryBlock[];
  sections: LegalNoticeSection[];
};

export default async function LegalNoticePage() {
  const messages = await getMessages();
  const notice = messages.legalNoticePage as LegalNoticeMessages;

  return (
    <article className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-soft text-[var(--brand-blue)]">
      <h1 className="text-3xl mb-4 text-[var(--brand-blue)]">
        {notice.title}
      </h1>

      {notice.summaryBlocks.map((block) => (
        <section key={block.title}>
          <h2 className="text-2xl mt-6 mb-2 text-[var(--brand-orange)]">
            {block.title}
          </h2>
          <p className="mb-4">
            {block.lines.map((line) => (
              <span key={line}>
                {renderLinkedText(line)}
                <br />
              </span>
            ))}
          </p>
          {block.paragraph && (
            <p className="mb-4">{renderLinkedText(block.paragraph)}</p>
          )}
        </section>
      ))}

      {notice.sections.map((section) => (
        <section key={section.title}>
          <h2 className="text-2xl mt-8 mb-2 text-[var(--brand-orange)]">
            {section.title}
          </h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4">
              {renderLinkedText(paragraph)}
            </p>
          ))}
        </section>
      ))}
    </article>
  );
}
