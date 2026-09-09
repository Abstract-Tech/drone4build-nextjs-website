import { PartnerProfileCard } from "@/components/ui/card";
import {
  ScrollRevealSection,
  SectionSubtitle,
  SectionTitle,
  StaggeredBlock,
} from "@/components/layout/section";
import type { PartnersPageMessages } from "./types";

type PartnersConsortiumSectionProps = {
  consortium: PartnersPageMessages["consortium"];
};

export default function PartnersConsortiumSection({
  consortium,
}: PartnersConsortiumSectionProps) {
  return (
    <ScrollRevealSection className="bg-slate-50">
      <SectionTitle>{consortium.title}</SectionTitle>
      <SectionSubtitle className="max-w-3xl">
        {consortium.intro}
      </SectionSubtitle>

      <StaggeredBlock className="mt-8 space-y-5">
        {consortium.items.map((partner) => (
          <PartnerProfileCard
            key={partner.name}
            className={
              partner.isCoordinator
                ? "border-(--brand-orange)"
                : undefined
            }
            {...partner}
          />
        ))}
      </StaggeredBlock>
    </ScrollRevealSection>
  );
}
