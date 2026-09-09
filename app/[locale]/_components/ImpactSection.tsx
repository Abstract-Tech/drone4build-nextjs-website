// src/components/drone/InnovationImpactSection.tsx
"use client";

import React from "react";
import { useTranslations } from "next-intl";
import {
  AccentBarCard,
  AccentBarCardContentText,
} from "@/components/ui/card";
import {
  ScrollRevealSection,
  SectionSubtitle,
  SectionTitle,
  StaggeredBlock,
} from "@/components/layout/section";

type ImpactRowItem = {
  description: string;
  key: string;
  title?: string;
};

type ImpactRow = {
  accentClassName?: string;
  items: ImpactRowItem[];
  key: string;
  title: string;
};

const InnovationImpactSection: React.FC = () => {
  const t = useTranslations("impact");
  const rows: ImpactRow[] = [
    {
      key: "outcomes",
      items: [
        {
          key: "description",
          description: t("outcomes.description"),
        },
      ],
      title: t("outcomes.title"),
    },
    {
      key: "keyOutputs",
      items: [
        {
          key: "completeTraining",
          description: t("keyOutputs.completeTraining.description"),
          title: t("keyOutputs.completeTraining.title"),
        },
        {
          key: "openPlatform",
          description: t("keyOutputs.openPlatform.description"),
          title: t("keyOutputs.openPlatform.title"),
        },
        {
          key: "competence",
          description: t("keyOutputs.competence.description"),
          title: t("keyOutputs.competence.title"),
        },
        {
          key: "network",
          description: t("keyOutputs.network.description"),
          title: t("keyOutputs.network.title"),
        },
      ],
      title: t("keyOutputs.title"),
    },
    {
      accentClassName: "uppercase tracking-[0.18em]",
      key: "longTermReach",
      items: [
        {
          key: "professionals",
          description: t("longTermReach.professionals.description"),
          title: t("longTermReach.professionals.title"),
        },
        {
          key: "countries",
          description: t("longTermReach.countries.description"),
          title: t("longTermReach.countries.title"),
        },
        {
          key: "years",
          description: t("longTermReach.years.description"),
          title: t("longTermReach.years.title"),
        },
      ],
      title: t("longTermReach.title"),
    },
  ] as const;

  return (
    <ScrollRevealSection className="bg-white">
      <SectionTitle>{t("title")}</SectionTitle>
      <SectionSubtitle>{t("intro")}</SectionSubtitle>

      <StaggeredBlock className="mt-6 space-y-4" staggerChildren={0.25}>
        {rows.map((row) => (
          <AccentBarCard
            key={row.key}
            accentClassName={row.accentClassName}
            title={row.title}
          >
            {row.items.map((item, index) => (
              <AccentBarCardContentText
                key={item.key}
                className={index > 0 ? "mt-3" : undefined}
                title={item.title}
              >
                {item.description}
              </AccentBarCardContentText>
            ))}
          </AccentBarCard>
        ))}
      </StaggeredBlock>
    </ScrollRevealSection>
  );
};

export default InnovationImpactSection;
