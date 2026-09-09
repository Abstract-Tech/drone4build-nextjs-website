"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ContentCard } from "@/components/ui/card";
import {
  ScrollRevealSection,
  SectionTitle,
  StaggeredBlock,
} from "@/components/layout/section";

const AboutSection: React.FC = () => {
  const t = useTranslations("about");

  return (
    <ScrollRevealSection className="bg-slate-50">
      <SectionTitle>{t("title")}</SectionTitle>
      <StaggeredBlock
        className="mt-6 grid gap-5 md:grid-cols-3"
        staggerChildren={0.15}
      >
        <ContentCard
          iconSrc="/graduate-icon.svg"
          title={t("cards.blended.title")}
          description={t("cards.blended.description")}
        />
        <ContentCard
          iconSrc="/foundation-icon.svg"
          title={t("cards.strategic.title")}
          description={t("cards.strategic.description")}
        />
        <ContentCard
          iconSrc="/open-platform-icon.svg"
          title={t("cards.openPlatform.title")}
          description={t("cards.openPlatform.description")}
        />
      </StaggeredBlock>
    </ScrollRevealSection>
  );
};

export default AboutSection;
