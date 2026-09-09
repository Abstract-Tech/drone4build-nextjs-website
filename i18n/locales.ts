import type { AppLocale } from "./routing";

export type LocaleDisplay = {
  readonly locale: AppLocale;
  readonly label: string;
  readonly flag: string;
};

export const LOCALE_DISPLAY: readonly LocaleDisplay[] = [
  { locale: "en", label: "English", flag: "🇬🇧" },
  { locale: "de", label: "Deutsch", flag: "🇩🇪" },
  { locale: "es", label: "Español", flag: "🇪🇸" },
  { locale: "el", label: "Ελληνικά", flag: "🇬🇷" },
  { locale: "mk", label: "Македонски", flag: "🇲🇰" },
  { locale: "it", label: "Italiano", flag: "🇮🇹" },
] as const;

export function getLocaleDisplay(locale: string): LocaleDisplay {
  return (
    LOCALE_DISPLAY.find((item) => item.locale === locale) ??
    LOCALE_DISPLAY[0]
  );
}
