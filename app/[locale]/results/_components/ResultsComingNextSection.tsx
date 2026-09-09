import Chip from "@/components/ui/chip";
import { ContentCard } from "@/components/ui/card";
import {
  ScrollRevealSection,
  SectionSubtitle,
  SectionTitle,
  StaggeredBlock,
} from "@/components/layout/section";
import type { ResultsPageMessages } from "./types";

type ResultsComingNextSectionProps = {
  comingNext: ResultsPageMessages["comingNext"];
};

export default function ResultsComingNextSection({
  comingNext,
}: ResultsComingNextSectionProps) {
  return (
    <ScrollRevealSection className="bg-slate-50">
      <SectionTitle>{comingNext.title}</SectionTitle>
      <SectionSubtitle className="max-w-3xl">
        {comingNext.intro}
      </SectionSubtitle>

      <StaggeredBlock className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {comingNext.items.map((item) => (
          <ContentCard
            key={item.deliverable}
            title={item.deliverable}
            description={
              <div>
                <div className="mb-3 flex flex-wrap gap-2">
                  {item.tags?.length ? (
                    item.tags.map((tag, tagIndex) => (
                      <Chip
                        key={`${tag.label}-${tagIndex}`}
                        size="sm"
                        variant={tag.variant ?? "light"}
                      >
                        {tag.label}
                      </Chip>
                    ))
                  ) : (
                    <>
                      <Chip
                        size="sm"
                        variant={item.statusVariant ?? "orange"}
                      >
                        {item.status}
                      </Chip>
                      <Chip size="sm" variant="light">
                        {item.expected}
                      </Chip>
                    </>
                  )}
                </div>
                <p>{item.description}</p>
              </div>
            }
          />
        ))}
      </StaggeredBlock>
    </ScrollRevealSection>
  );
}
