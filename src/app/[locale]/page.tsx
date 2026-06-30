import { notFound } from "next/navigation";
import { AboutSection } from "@/components/layout/about-section";
import { CapabilitiesSection } from "@/components/layout/capabilities-section";
import { ContactSection } from "@/components/layout/contact-section";
import { HeroSection } from "@/components/layout/hero-section";
import { ManufacturingSection } from "@/components/layout/manufacturing-section";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locales";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return (
    <>
      <SiteHeader currentLocale={locale} dictionary={dictionary} />
      <main id="main-content">
        <HeroSection dictionary={dictionary} />
        <AboutSection dictionary={dictionary} />
        <CapabilitiesSection dictionary={dictionary} locale={locale} />
        <ManufacturingSection dictionary={dictionary} />
        <ContactSection dictionary={dictionary} />
      </main>
      <SiteFooter currentLocale={locale} dictionary={dictionary} />
    </>
  );
}
