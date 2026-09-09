import Chip from "@/components/ui/chip";
import { ContentCard } from "@/components/ui/card";
import {
  ScrollRevealSection,
  SectionSubtitle,
  SectionTitle,
  StaggeredBlock,
} from "@/components/layout/section";
import type { ResultsPageMessages } from "./types";

type ResultsWorkshopsSectionProps = {
  workshops: ResultsPageMessages["inProgress"];
};

export default function ResultsWorkshopsSection({
  workshops,
}: ResultsWorkshopsSectionProps) {
  return (
    <ScrollRevealSection>
      <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="max-w-4xl">
          <SectionTitle>{workshops.title}</SectionTitle>
        </div>
      </div>

      <div className="mt-6 flex items-start gap-2 flex-col">
        <div className="flex flex-wrap gap-2">
          {workshops.tags.map((tag, tagIndex) => (
            <Chip
              key={`${tag.label}-${tagIndex}`}
              variant={tag.variant ?? "light"}
              size="sm"
            >
              {tag.label}
            </Chip>
          ))}
        </div>
        <div className="max-w-3xl">
          <h3 className="text-3xl text-(--brand-blue)">
            {workshops.subtitle}
          </h3>
        </div>
      </div>

      <SectionSubtitle className="mt-5 max-w-5xl">
        {workshops.summary}
      </SectionSubtitle>

      <StaggeredBlock className="mt-6 grid gap-5 md:grid-cols-3">
        {workshops.findings.map((finding) => (
          <ContentCard
            key={finding.title}
            title={finding.title}
            description={finding.description}
          />
        ))}
      </StaggeredBlock>
    </ScrollRevealSection>
  );
}
