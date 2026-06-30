import { notFound } from "next/navigation";
import { HeroSection } from "@/components/layout/hero-section";
import { SiteHeader } from "@/components/layout/site-header";
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
      </main>
    </>
  );
}
