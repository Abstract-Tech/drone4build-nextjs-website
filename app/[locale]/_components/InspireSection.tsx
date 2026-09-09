"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  ScrollRevealSection,
  SectionTitle,
} from "@/components/layout/section";

const InspireSection: React.FC = () => {
  const t = useTranslations("inspire");

  return (
    <ScrollRevealSection
      className="bg-white"
      contentClassName="flex flex-col gap-8 md:grid md:grid-cols-2 md:items-center"
      offsetY={40}
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
      >
        <SectionTitle>{t("title")}</SectionTitle>
        <p className="mt-3 text-base leading-relaxed text-(--brand-blue)">
          {t("paragraph1")}
        </p>
        <p className="mt-3 text-base leading-relaxed text-(--brand-blue)">
          {t("paragraph2")}
        </p>
      </motion.div>
      {/* Image column */}
      <motion.div
        className="flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-full max-w-xs md:max-w-sm">
          <Image
            width={500}
            height={500}
            src="/d4b_square-banner.jpg"
            alt="Drone Illustration"
            className="h-auto w-full rounded-2xl object-contain shadow-xl/20"
          />
        </div>
      </motion.div>
    </ScrollRevealSection>
  );
};

export default InspireSection;
