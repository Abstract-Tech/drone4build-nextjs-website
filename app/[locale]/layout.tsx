import type React from "react";
import type { Metadata } from "next";
import { Suspense } from "react";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import RecaptchaProvider from "@/components/RecaptchaProvider";
import { routing } from "@/i18n/routing";
import { Toaster } from "@/components/ui/sonner";

const siteUrl = "https://drone4build.eu";
const socialImage = "/drone4build-social-card.png";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "common.metadata" });
  const siteT = await getTranslations({ locale, namespace: "common" });
  const siteTitle = t("title");
  const siteDescription = t("description");
  const siteName = siteT("siteName");
  const imageAlt = t("imageAlt");

  return {
    metadataBase: new URL(siteUrl),
    title: siteTitle,
    description: siteDescription,
    applicationName: siteName,
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    category: "education",
    keywords: [
      "Drone4Build",
      "drones in construction",
      "building renovation",
      "Erasmus+",
      "VET training",
    ],
    icons: {
      icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
      shortcut: ["/favicon.ico"],
      apple: ["/favicon.ico"],
    },
    openGraph: {
      type: "website",
      siteName,
      title: siteTitle,
      description: siteDescription,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [{ url: socialImage, alt: imageAlt }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <RecaptchaProvider>
        <Suspense fallback={null}>
          <AnalyticsProvider />
        </Suspense>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </RecaptchaProvider>
    </NextIntlClientProvider>
  );
}
