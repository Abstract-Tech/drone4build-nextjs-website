import {
  ScrollRevealSection,
  SectionSubtitle,
  SectionTitle,
} from "@/components/layout/section";
import type { ProjectPageMessages } from "./types";

type ProjectWhySectionProps = {
  why: ProjectPageMessages["why"];
};

export default function ProjectWhySection({
  why,
}: ProjectWhySectionProps) {
  return (
    <ScrollRevealSection>
      <SectionTitle>{why.title}</SectionTitle>
      {why.paragraphs.map((paragraph) => (
        <SectionSubtitle key={paragraph}>{paragraph}</SectionSubtitle>
      ))}
    </ScrollRevealSection>
  );
}
