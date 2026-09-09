import type { ChipVariant } from "@/components/ui/chip";

export type PartnerBadge = {
  label: string;
  tone?: ChipVariant;
};

export type PartnerItem = {
  badges: PartnerBadge[];
  countryFlag: string;
  description: string;
  isCoordinator?: boolean;
  legalName: string;
  location: string;
  logoAlt: string;
  logoSrc: string;
  name: string;
  role: string;
  websiteHref: string;
  websiteLabel: string;
};

export type PartnersPageMessages = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    countries: Array<{
      flag: string;
      label: string;
    }>;
  };
  consortium: {
    title: string;
    intro: string;
    items: PartnerItem[];
  };
  collaboration: {
    title: string;
    description: string;
    cta: string;
  };
};
