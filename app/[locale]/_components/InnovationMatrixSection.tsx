// src/components/drone/InnovationMatrixSection.tsx
"use client";

import React from "react";
import { type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  SplitIconCard,
  SplitIconCardContentText,
} from "@/components/ui/card";
import {
  ScrollRevealSection,
  SectionSubtitle,
  SectionTitle,
  StaggeredBlock,
} from "@/components/layout/section";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // slower card animation
    },
  },
};

const InnovationMatrixSection: React.FC = () => {
  const t = useTranslations("innovation");

  return (
    <ScrollRevealSection>
      <SectionTitle>{t("title")}</SectionTitle>
      <SectionSubtitle>{t("intro")}</SectionSubtitle>

      <StaggeredBlock
        className="mt-6 grid gap-5 md:grid-cols-3"
        staggerChildren={0.25}
      >
        <SplitIconCard
          variants={cardVariants}
          iconSrc="/icon-transformation.svg"
          title={t("cards.holistic.title")}
        >
          <SplitIconCardContentText>
            {t("cards.holistic.paragraph1")}
          </SplitIconCardContentText>
          <SplitIconCardContentText className="mt-3">
            {t("cards.holistic.paragraph2")}
          </SplitIconCardContentText>
        </SplitIconCard>

        <SplitIconCard
          variants={cardVariants}
          iconSrc="/icon-alignment.svg"
          title={t("cards.strategic.title")}
        >
          <SplitIconCardContentText>
            {t("cards.strategic.paragraph1")}
          </SplitIconCardContentText>
          <SplitIconCardContentText className="mt-3">
            {t("cards.strategic.paragraph2")}
          </SplitIconCardContentText>
        </SplitIconCard>

        <SplitIconCard
          variants={cardVariants}
          iconSrc="/icon-develop.svg"
          title={t("cards.features.title")}
        >
          <SplitIconCardContentText
            title={t("cards.features.practical.title")}
          >
            {t("cards.features.practical.description")}
          </SplitIconCardContentText>

          <SplitIconCardContentText
            className="mt-3"
            title={t("cards.features.policy.title")}
          >
            {t("cards.features.policy.description")}
          </SplitIconCardContentText>

          <SplitIconCardContentText
            className="mt-3"
            title={t("cards.features.networks.title")}
          >
            {t("cards.features.networks.description")}
          </SplitIconCardContentText>
        </SplitIconCard>
      </StaggeredBlock>
    </ScrollRevealSection>
  );
};

export default InnovationMatrixSection;
