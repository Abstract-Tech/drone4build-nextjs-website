import { ContentCard } from "@/components/ui/card";
import {
  ScrollRevealSection,
  SectionTitle,
  StaggeredBlock,
} from "@/components/layout/section";
import type { ProjectPageMessages } from "./types";

type ProjectAtAGlanceSectionProps = {
  glance: ProjectPageMessages["glance"];
};

export default function ProjectAtAGlanceSection({
  glance,
}: ProjectAtAGlanceSectionProps) {
  return (
    <ScrollRevealSection className="bg-slate-50">
      <SectionTitle>{glance.title}</SectionTitle>

      <StaggeredBlock className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {glance.items.map((item) => (
          <ContentCard
            key={item.label}
            title={item.label}
            description={item.value}
          />
        ))}
      </StaggeredBlock>
    </ScrollRevealSection>
  );
}
