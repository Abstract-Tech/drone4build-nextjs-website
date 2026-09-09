"use client";

import React from "react";
import { useTranslations } from "next-intl";
import {
  ScrollRevealSection,
  SectionSubtitle,
  SectionTitle,
} from "@/components/layout/section";

const AddressingCriticalChallengesSection: React.FC = () => {
  const challenges = useTranslations("challenges");

  return (
    <ScrollRevealSection>
      <SectionTitle>{challenges("title")}</SectionTitle>
      <SectionSubtitle>{challenges("paragraph1")}</SectionSubtitle>
      <SectionSubtitle>{challenges("paragraph2")}</SectionSubtitle>
    </ScrollRevealSection>
  );
};

export default AddressingCriticalChallengesSection;
