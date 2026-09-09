"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import CookieConsent, {
  getCookieConsentValue,
} from "react-cookie-consent";
import { initGA, trackPageView } from "@/lib/ga";

export default function AnalyticsProvider() {
  const t = useTranslations("cookieConsent");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [gaInitialized, setGaInitialized] = useState(false);

  // Initialize GA **only after consent**
  useEffect(() => {
    const consent =
      getCookieConsentValue("user_ga_consent") === "true";
    if (consent && !gaInitialized) {
      // defer setState to next tick
      setTimeout(() => {
        initGA();
        setGaInitialized(true);
      }, 0);
    }
  }, [gaInitialized]);

  // Track SPA pageviews after consent
  useEffect(() => {
    if (!gaInitialized) return;
    const url =
      pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    trackPageView(url);
  }, [pathname, searchParams, gaInitialized]);

  return (
    <>
      {/* Cookie consent banner */}
      <CookieConsent
        location="bottom"
        buttonText={t("acceptAll")}
        declineButtonText={t("rejectAll")}
        enableDeclineButton
        cookieName="user_ga_consent"
        onAccept={() => {
          initGA();
          setGaInitialized(true);
          trackPageView(
            pathname +
              (searchParams?.toString() ? `?${searchParams}` : ""),
          );
        }}
        onDecline={() => {
          setGaInitialized(false);
        }}
        buttonStyle={{
          backgroundColor: "var(--brand-orange)",
          color: "white",
          padding: "0.5rem 1.5rem",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontWeight: 600,
          cursor: "pointer",
        }}
        declineButtonStyle={{
          backgroundColor: "#e2e8f0",
          color: "#1e293b",
          padding: "0.5rem 1.5rem",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {t("message")}
      </CookieConsent>
    </>
  );
}
