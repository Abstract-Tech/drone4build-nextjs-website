// src/components/drone/ConnectSection.tsx
"use client";

import React from "react";
import { trackClick } from "@/lib/ga";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { useTranslations } from "next-intl";
import { ContentCard } from "@/components/ui/card";
import {
  ScrollRevealSection,
  SectionSubtitle,
  SectionTitle,
  StaggeredBlock,
} from "@/components/layout/section";

type ConnectCard = {
  key: "linkedin" | "email" | "mailing";
  icon: React.ReactNode;
  href: string;
  onClick: () => void;
  rel?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  variant: string;
};

const ConnectSection: React.FC = () => {
  const t = useTranslations("connect");
  const cards: ConnectCard[] = [
    {
      key: "linkedin",
      icon: <LinkedinIcon size={44} color="var(--brand-orange)" />,
      href: "https://www.linkedin.com/company/drone4build/",
      onClick: () => trackClick("social_linkedin"),
      rel: "noreferrer",
      target: "_blank" as const,
      variant:
        "border border-[var(--brand-orange)] bg-[var(--brand-orange)] text-white hover:bg-[var(--brand-orange)]/90",
    },
    {
      key: "email",
      icon: (
        <div className="h-full w-full bg-[url('/icon-mail.svg')] bg-contain bg-center bg-no-repeat" />
      ),
      href: "mailto:hallo@abstract-technology.de",
      onClick: () => trackClick("support_team"),
      variant:
        "border border-[var(--brand-orange)] bg-white text-[var(--brand-orange)] hover:bg-[var(--brand-orange)]/5",
    },
    {
      key: "mailing",
      icon: (
        <div className="h-full w-full bg-[url('/icon-mailing.svg')] bg-contain bg-center bg-no-repeat" />
      ),
      href: "https://forms.gle/Wo59Hk4QX3RJryyC7",
      onClick: () => trackClick("mailing_list"),
      variant:
        "border border-[var(--brand-orange)] bg-[var(--brand-orange)] text-white hover:bg-[var(--brand-orange)]/90",
    },
  ] as const;

  return (
    <ScrollRevealSection>
      <SectionTitle>{t("title")}</SectionTitle>
      <SectionSubtitle>{t("intro")}</SectionSubtitle>

      <StaggeredBlock className="mt-6 grid gap-5 md:grid-cols-3">
        {cards.map((card) => (
          <ContentCard
            key={card.key}
            icon={
              <div className="flex h-15 w-15 items-center justify-center">
                {card.icon}
              </div>
            }
            title={t(`${card.key}.title`)}
            description={t(`${card.key}.description`)}
            action={{
              href: card.href,
              label: t(`${card.key}.cta`),
              onClick: card.onClick,
              rel: card.rel,
              target: card.target,
              className: card.variant,
            }}
          />
        ))}
      </StaggeredBlock>
    </ScrollRevealSection>
  );
};

export default ConnectSection;
