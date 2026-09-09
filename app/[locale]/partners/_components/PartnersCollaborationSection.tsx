import AppLink from "@/components/ui/link";
import {
  ScrollRevealSection,
  SectionSubtitle,
  SectionTitle,
} from "@/components/layout/section";
import { Link } from "@/i18n/navigation";
import type { PartnersPageMessages } from "./types";

type PartnersCollaborationSectionProps = {
  collaboration: PartnersPageMessages["collaboration"];
};

export default function PartnersCollaborationSection({
  collaboration,
}: PartnersCollaborationSectionProps) {
  return (
    <ScrollRevealSection className="border-b-0 bg-white">
      <div className="text-center">
        <SectionTitle>{collaboration.title}</SectionTitle>
        <SectionSubtitle className="mx-auto max-w-2xl">
          {collaboration.description}
        </SectionSubtitle>
        <div className="mt-6">
          <AppLink
            component={Link}
            href="/contact"
            size="md"
          >
            {collaboration.cta}
          </AppLink>
        </div>
      </div>
    </ScrollRevealSection>
  );
}
