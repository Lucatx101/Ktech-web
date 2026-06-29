import { notFound } from "next/navigation";
import { LocaleSwitch } from "@/components/ui/locale-switch";
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
    <div className="foundation-page">
      <main className="foundation-main">
        <h1 className="foundation-title">{dictionary.brandName}</h1>
        <p className="foundation-slogan">{dictionary.slogan}</p>
        <p className="foundation-status">{dictionary.foundationStatus}</p>
        <LocaleSwitch currentLocale={locale} dictionary={dictionary} />
      </main>
    </div>
  );
}
