// src/components/drone/Footer.tsx
"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, type Variants } from "framer-motion";

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const contentContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Footer: React.FC = () => {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="border-t border-slate-200 bg-slate-50 bg-[url('/eu_footer_bg.png')] bg-cover bg-center px-4 py-8 md:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={footerVariants}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="flex flex-col items-center gap-6 text-center"
          variants={contentContainerVariants}
        >
          <motion.div
            className="max-w-5xl rounded-2xl border border-white/60 bg-white/70 px-5 py-6 shadow-soft backdrop-blur-sm md:px-8"
            variants={blockVariants}
          >
            <p className="text-sm leading-relaxed text-[var(--brand-blue)]">
              {t("coFunded")}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--brand-blue)]">
              {t("disclaimer")}
            </p>
            <div className="mt-5 flex justify-center">
              <Image
                width={200}
                height={200}
                src="/eu_co_funded_en.jpg"
                alt={t("coFundedLabel")}
                className="h-auto max-h-20 w-auto"
              />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--brand-blue)]">
              Erasmus+ Programme | KA220-VET | Project Number:
              2025-1-DE02-KA220-VET-000362152
            </p>
          </motion.div>
        </motion.div>

        <motion.p
          className="mt-4 text-center text-[11px] text-slate-500"
          variants={blockVariants}
        >
          {t("rights", { year })}
        </motion.p>

        <motion.nav
          className="mt-6 text-center"
          variants={blockVariants}
        >
          <ul className="flex flex-wrap justify-center gap-4">
            <li>
              <Link
                href="/legal/privacy-policy"
                className="text-sm font-medium text-[var(--brand-blue)] hover:text-[var(--brand-orange)] hover:underline transition-colors"
              >
                {t("links.privacyPolicy")}
              </Link>
            </li>
            <li>
              <Link
                href="/legal/cookies-policy"
                className="text-sm font-medium text-[var(--brand-blue)] hover:text-[var(--brand-orange)] hover:underline transition-colors"
              >
                {t("links.cookiesPolicy")}
              </Link>
            </li>
            <li>
              <Link
                href="/legal/legal-notice"
                className="text-sm font-medium text-[var(--brand-blue)] hover:text-[var(--brand-orange)] hover:underline transition-colors"
              >
                {t("links.legalNotice")}
              </Link>
            </li>
            <li>
              <Link
                href="/legal/terms-of-use"
                className="text-sm font-medium text-[var(--brand-blue)] hover:text-[var(--brand-orange)] hover:underline transition-colors"
              >
                {t("links.termsOfUse")}
              </Link>
            </li>
            <li>
              <Link
                href="/legal/social-media-disclaimer"
                className="text-sm font-medium text-[var(--brand-blue)] hover:text-[var(--brand-orange)] hover:underline transition-colors"
              >
                {t("links.socialMediaDisclaimer")}
              </Link>
            </li>
          </ul>
        </motion.nav>
      </div>
    </motion.footer>
  );
};

export default Footer;
