import { HeroSection } from "@/components/layout/section";
import type { ResultsPageMessages } from "./types";

type ResultsHeroSectionProps = {
  hero: ResultsPageMessages["hero"];
};

export default function ResultsHeroSection({
  hero,
}: ResultsHeroSectionProps) {
  return (
    <HeroSection
      eyebrow={hero.eyebrow}
      title={hero.title}
      description={hero.description}
      titleClassName="max-w-4xl"
    />
  );
}
