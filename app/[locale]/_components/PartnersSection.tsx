"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  ScrollRevealSection,
  SectionSubtitle,
  SectionTitle,
} from "@/components/layout/section";

const hoverMotion = {
  y: -3,
  scale: 1.03,
  boxShadow: "0 16px 32px rgba(15, 23, 42, 0.12)",
};

const partners = [
  { name: "Abstract", src: "/partner-abstract-logo.png" },
  { name: "BBSN", src: "/partner-BBSN-logo.png" },
  { name: "FLC", src: "/partner-FLC-logo.png" },
  { name: "HD", src: "/partner-HD-logo.png" },
  { name: "KS", src: "/partner-KS-logo.png" },
  { name: "PEDMEDE", src: "/partner-PEDMEDE-logo.jpg" },
  { name: "Scuola", src: "/partner-Scuola-logo.png" },
];

const PartnersSection: React.FC = () => {
  const t = useTranslations("partnersSection");

  return (
    <ScrollRevealSection>
      <SectionTitle>{t("title")}</SectionTitle>
      <SectionSubtitle>{t("description")}</SectionSubtitle>

      {/* Infinite logo slider */}
      <div className="relative mt-8">
        {/* Edge gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent" />

        <div className="overflow-x-clip overflow-y-visible">
          {/* Moving track */}
          <div
            className="partner-marquee gap-5"
            style={{ ["--marquee-duration" as string]: "26s" }} // tweak speed here
          >
            {/* Duplicate the list twice for a seamless loop */}
            {[0, 1].map((loopIndex) => (
              <React.Fragment key={loopIndex}>
                {partners.map((partner) => (
                  <motion.div
                    key={`${partner.name}-${loopIndex}`}
                    className="flex h-24 flex-[0_0_160px] items-center justify-center rounded-lg border border-slate-200 bg-white p-3 shadow-soft"
                    whileHover={hoverMotion}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Image
                      src={partner.src}
                      alt={`${partner.name} logo`}
                      width={160}
                      height={96}
                      className="h-full w-auto object-contain"
                    />
                  </motion.div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </ScrollRevealSection>
  );
};

export default PartnersSection;
