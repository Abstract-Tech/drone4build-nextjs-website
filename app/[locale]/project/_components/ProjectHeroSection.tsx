import { HeroSection } from "@/components/layout/section";
import type { ProjectPageMessages } from "./types";

type ProjectHeroSectionProps = {
  hero: ProjectPageMessages["hero"];
};

export default function ProjectHeroSection({
  hero,
}: ProjectHeroSectionProps) {
  return (
    <HeroSection
      title={hero.heading}
      description={hero.subheading}
    />
  );
}
