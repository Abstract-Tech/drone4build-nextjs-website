"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { trackClick } from "@/lib/ga";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { LOCALE_DISPLAY } from "@/i18n/locales";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const selectedLang =
    LOCALE_DISPLAY.find((item) => item.locale === locale) ??
    LOCALE_DISPLAY[0];
  const getLanguageLabel = (localeCode: string) =>
    t(`languageNames.${localeCode}`);
  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownTriggerClasses =
    "flex items-center justify-between px-3 py-1.5 border border-[var(--border-soft)] rounded-full text-[0.875rem] font-semibold text-[var(--brand-blue)] hover:text-[var(--brand-orange)] transition";

  const isActivePath = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const getDesktopNavLinkClassName = (href: string) =>
    cn(
      "rounded-full px-3 py-1.5 text-sm font-semibold underline-offset-4 transition",
      isActivePath(href)
        ? "text-(--brand-orange) underline"
        : "text-[var(--brand-blue)] hover:text-(--brand-orange)",
    );

  const getMobileNavLinkClassName = (href: string) =>
    cn(
      "block font-semibold underline-offset-4 transition",
      isActivePath(href)
        ? "text-(--brand-orange) underline"
        : "text-[var(--brand-blue)] hover:text-(--brand-orange)",
    );

  return (
    <>
      <div className="relative z-50">
        <header className="relative z-50 border-b border-(--border-soft) bg-white shadow-sm">
          <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <Link href="/" aria-label="Homepage">
              <Image
                width={200}
                height={200}
                src="/Drone4Build-logo.svg"
                alt="Drone4Build logo"
                className="h-11 w-auto md:h-12"
                priority
              />
            </Link>

            <motion.button
              className="md:hidden text-(--brand-blue)"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.92 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex"
                  >
                    <X className="size-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex"
                  >
                    <Menu className="size-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="/partners"
                className={getDesktopNavLinkClassName("/partners")}
              >
                {t("partners")}
              </Link>
              <Link
                href="/results"
                className={getDesktopNavLinkClassName("/results")}
              >
                {t("results")}
              </Link>
              <Link
                href="/project"
                className={getDesktopNavLinkClassName("/project")}
              >
                {t("projectPage")}
              </Link>
              <Link
                href="/contact"
                className={getDesktopNavLinkClassName("/contact")}
              >
                {t("contactUs")}
              </Link>
              {/* Social links */}
              <div className="flex items-center gap-1">
                <a
                  href="https://www.linkedin.com/company/drone4build/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackClick("social_linkedin")}
                  aria-label={t("followLinkedin")}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-(--brand-orange)/10"
                >
                  <LinkedinIcon
                    size={24}
                    color="var(--brand-orange)"
                  />
                </a>
                <a
                  href="https://www.instagram.com/drone4build_euproject/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackClick("social_instagram")}
                  aria-label={t("followInstagram")}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-(--brand-orange)/10"
                >
                  <InstagramIcon
                    size={24}
                    color="var(--brand-orange)"
                  />
                </a>
              </div>
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  id="desktop-language-menu-trigger"
                  className={dropdownTriggerClasses}
                >
                  {selectedLang.flag}
                  <ChevronDown className="ml-2 size-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  id="desktop-language-menu-content"
                  className="bg-white border border-(--border-soft) shadow-soft rounded-lg p-1"
                >
                  {LOCALE_DISPLAY.map((lang) => (
                    <DropdownMenuItem
                      key={lang.label}
                      onClick={() =>
                        router.replace(pathname, {
                          locale: lang.locale,
                        })
                      }
                      className="flex items-center gap-2 font-semibold text-sm text-(--brand-blue) hover:text-(--brand-orange) transition"
                    >
                      <span className="text-lg">{lang.flag}</span>
                      {getLanguageLabel(lang.locale)}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        {mobileOpen && (
          <>
            <button
              aria-label="Close menu backdrop"
              className="fixed inset-0 z-30 bg-slate-900/20 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute left-0 right-0 top-full z-40 border-t border-(--border-soft) bg-white px-4 py-5 space-y-4 shadow-2xl ring-1 ring-slate-900/5 md:hidden">
              <Link
                href="/partners"
                onClick={() => setMobileOpen(false)}
                className={getMobileNavLinkClassName("/partners")}
              >
                {t("partners")}
              </Link>
              <Link
                href="/results"
                onClick={() => setMobileOpen(false)}
                className={getMobileNavLinkClassName("/results")}
              >
                {t("results")}
              </Link>

              <Link
                href="/project"
                onClick={() => setMobileOpen(false)}
                className={getMobileNavLinkClassName("/project")}
              >
                {t("projectPage")}
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className={getMobileNavLinkClassName("/contact")}
              >
                {t("contactUs")}
              </Link>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/company/drone4build/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackClick("social_linkedin")}
                  aria-label={t("followLinkedin")}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-(--border-soft)"
                >
                  <LinkedinIcon
                    size={22}
                    color="var(--brand-orange)"
                  />
                </a>
                <a
                  href="https://www.instagram.com/drone4build_euproject/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackClick("social_instagram")}
                  aria-label={t("followInstagram")}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-(--border-soft)"
                >
                  <InstagramIcon
                    size={22}
                    color="var(--brand-orange)"
                  />
                </a>
              </div>
              <div className="pt-2">
                <div className="mb-2 text-sm font-semibold text-(--brand-blue)">
                  {t("language")}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {LOCALE_DISPLAY.map((lang) => {
                    const isActive = lang.locale === locale;
                    return (
                      <button
                        key={lang.label}
                        type="button"
                        onClick={() => {
                          setMobileOpen(false);
                          router.replace(pathname, {
                            locale: lang.locale,
                          });
                        }}
                        className={`flex items-center justify-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition ${
                          isActive
                            ? "border-(--brand-orange) bg-(--brand-orange) text-white"
                            : "border-(--border-soft) text-(--brand-blue) hover:border-(--brand-orange) hover:text-(--brand-orange)"
                        }`}
                      >
                        <span>{lang.flag}</span>
                        {getLanguageLabel(lang.locale)}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
