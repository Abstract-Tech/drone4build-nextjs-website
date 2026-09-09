import AppLink from "@/components/ui/link";
import Chip from "@/components/ui/chip";
import { ContentCard } from "@/components/ui/card";
import {
  ScrollRevealSection,
  SectionSubtitle,
  SectionTitle,
  StaggeredBlock,
} from "@/components/layout/section";
import type { ResultsPageMessages } from "./types";

type ResultsPublishedSectionProps = {
  published: ResultsPageMessages["published"];
};

export default function ResultsPublishedSection({
  published,
}: ResultsPublishedSectionProps) {
  return (
    <>
      {published.sections.map((section, index) => (
        <ScrollRevealSection
          key={section.title}
          className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}
        >
          <SectionTitle>{section.title}</SectionTitle>

          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {section.tags.map((tag, tagIndex) => (
                <Chip
                  key={`${tag.label}-${tagIndex}`}
                  variant={tag.variant ?? "light"}
                  size="sm"
                >
                  {tag.label}
                </Chip>
              ))}
            </div>

            <SectionSubtitle className="mt-5 max-w-5xl">
              {section.summary}
            </SectionSubtitle>

            {section.cta ? (
              <div className="mt-6">
                <AppLink
                  href={section.cta.href}
                  size="md"
                  download={section.cta.download}
                >
                  {section.cta.label}
                </AppLink>
              </div>
            ) : null}
          </div>

          <StaggeredBlock className="mt-6 grid gap-5 md:grid-cols-3">
            {section.findings.map((finding) => (
              <ContentCard
                key={finding.title}
                title={finding.title}
                description={finding.description}
              />
            ))}
          </StaggeredBlock>
        </ScrollRevealSection>
      ))}
    </>
  );
}
