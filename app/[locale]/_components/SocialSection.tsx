"use client";

import React, { useEffect, useRef, useState } from "react";
import { trackClick } from "@/lib/ga";
import { useTranslations } from "next-intl";
import {
  SectionSubtitle,
  SectionTitle,
} from "@/components/layout/section";

const SocialSection: React.FC = () => {
  const t = useTranslations("social");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadWidget, setShouldLoadWidget] = useState(false);

  // 1) Only mark the section as "active" once it is in/near the viewport
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShouldLoadWidget(true);
          observer.disconnect(); // only need to load once
        }
      },
      {
        root: null,
        threshold: 0.2, // when ~20% of block is visible
      },
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  // 2) Load the Elfsight script *only after* we’ve decided to show the widget
  useEffect(() => {
    if (!shouldLoadWidget) return;

    const scriptId = "elfsight-platform-script";
    if (document.getElementById(scriptId)) {
      return; // script already loaded
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, [shouldLoadWidget]);

  return (
    <section className="border-b border-(--border-soft) bg-slate-50 px-4 py-10 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle>{t("title")}</SectionTitle>

        <SectionSubtitle className="max-w-2xl text-(--text-muted)">
          {t.rich("description", {
            link: (chunks) => (
              <a
                href="https://www.linkedin.com/company/drone4build"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackClick("social_linkedin")}
                className="font-medium text-(--brand-orange) underline-offset-2 hover:underline"
              >
                {chunks}
              </a>
            ),
          })}
        </SectionSubtitle>

        <div
          ref={containerRef}
          className="mt-4 rounded-lg border border-(--border-soft) bg-white p-3 shadow-[var(--shadow-soft)]"
        >
          {shouldLoadWidget ? (
            <div
              className="elfsight-app-7c733883-2552-4e85-b5c5-3e3564e75e99"
              data-elfsight-app-lazy
            />
          ) : (
            <div className="text-sm text-(--text-muted)">
              {t("loading")}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
