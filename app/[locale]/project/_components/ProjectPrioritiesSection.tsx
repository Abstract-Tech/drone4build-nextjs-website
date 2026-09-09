import {
  ScrollRevealSection,
  SectionSubtitle,
  SectionTitle,
} from "@/components/layout/section";
import type { ProjectPageMessages } from "./types";

type ProjectPrioritiesSectionProps = {
  priorities: ProjectPageMessages["priorities"];
};

export default function ProjectPrioritiesSection({
  priorities,
}: ProjectPrioritiesSectionProps) {
  return (
    <ScrollRevealSection className="border-b-0">
      <SectionTitle>{priorities.title}</SectionTitle>
      <SectionSubtitle>{priorities.description}</SectionSubtitle>
    </ScrollRevealSection>
  );
}
