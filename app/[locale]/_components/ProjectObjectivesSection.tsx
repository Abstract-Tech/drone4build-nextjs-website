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

const objectiveCards = [
  { key: "upskill", icon: "/graduate-icon.svg" },
  { key: "modernise", icon: "/icon-mordernise.svg" },
  { key: "curriculum", icon: "/icon-develop.svg" },
  { key: "vet", icon: "/icon-build.svg" },
  { key: "transform", icon: "/icon-transform-sector.svg" },
  { key: "standards", icon: "/open-platform-icon.svg" },
] as const;

const ProjectObjectivesSection: React.FC = () => {
  const objectives = useTranslations("objectives");

  return (
    <ScrollRevealSection
      className="bg-slate-50"
      viewport={{
        once: true,
        amount: 0.05,
        margin: "0px 0px -80px 0px",
      }}
    >
      <SectionTitle>{objectives("title")}</SectionTitle>
      <SectionSubtitle>{objectives("intro")}</SectionSubtitle>

      <StaggeredBlock className="mt-6 grid gap-5 md:grid-cols-3">
        {objectiveCards.map((card) => (
          <ContentCard
            key={card.key}
            iconSrc={card.icon}
            title={objectives(`cards.${card.key}.title`)}
            description={objectives(`cards.${card.key}.description`)}
          />
        ))}
      </StaggeredBlock>
    </ScrollRevealSection>
  );
};

export default ProjectObjectivesSection;
