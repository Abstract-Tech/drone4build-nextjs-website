import {
  HeroSection,
} from "@/components/layout/section";
import Chip from "@/components/ui/chip";
import type { PartnersPageMessages } from "./types";

type PartnersHeroSectionProps = {
  hero: PartnersPageMessages["hero"];
};

export default function PartnersHeroSection({
  hero,
}: PartnersHeroSectionProps) {
  return (
    <HeroSection
      eyebrow={hero.eyebrow}
      title={hero.title}
      description={hero.description}
      titleClassName="max-w-4xl"
    >
      <div className="flex flex-wrap gap-3">
        {hero.countries.map((country) => (
          <Chip key={country.label} size="md" variant="light">
            <span className="mr-2" aria-hidden="true">
              {country.flag}
            </span>
            {country.label}
          </Chip>
        ))}
      </div>
    </HeroSection>
  );
}
