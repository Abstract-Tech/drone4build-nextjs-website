// src/components/drone/WorkPackagesSection.tsx
"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ContentCard } from "@/components/ui/card";
import {
  ScrollRevealSection,
  SectionSubtitle,
  SectionTitle,
  StaggeredBlock,
} from "@/components/layout/section";

const WorkPackagesSection: React.FC = () => {
  const t = useTranslations("workPackages");
  const cards = [
    "management",
    "ecosystem",
    "training",
    "pilot",
    "industry",
  ] as const;

  return (
    <ScrollRevealSection className="bg-slate-50">
      <SectionTitle>{t("title")}</SectionTitle>
      <SectionSubtitle className="max-w-2xl">
        {t("intro")}
      </SectionSubtitle>
      <StaggeredBlock className="mt-6 grid gap-5 md:grid-cols-3">
        {cards.map((key) => (
          <ContentCard
            key={key}
            title={t(`cards.${key}.title`)}
            description={t(`cards.${key}.description`)}
            titleClassName="uppercase tracking-wide"
          />
        ))}
      </StaggeredBlock>
    </ScrollRevealSection>
  );
};

export default WorkPackagesSection;
