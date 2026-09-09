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

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("common");

  return {
    title: t("siteName"),
    description: t("tagline"),
    generator: "v0.app",
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
