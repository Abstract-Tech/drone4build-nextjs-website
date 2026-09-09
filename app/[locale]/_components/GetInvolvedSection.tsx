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

const GetInvolvedSection: React.FC = () => {
  const t = useTranslations("getInvolved");
  const cards = [
    "professionals",
    "providers",
    "companies",
    "policy",
  ] as const;

  return (
    <ScrollRevealSection className="bg-slate-50">
      <SectionTitle>{t("title")}</SectionTitle>
      <SectionSubtitle>{t("intro")}</SectionSubtitle>

      <StaggeredBlock className="mt-6 grid gap-5 md:grid-cols-2">
        {cards.map((key) => (
          <ContentCard
            key={key}
            title={t(`cards.${key}.title`)}
            description={t(`cards.${key}.description`)}
          />
        ))}
      </StaggeredBlock>
    </ScrollRevealSection>
  );
};

export default GetInvolvedSection;
