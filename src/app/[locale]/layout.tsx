import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { company, getCanonicalUrl } from "@/content/company";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, SUPPORTED_LOCALES } from "@/i18n/locales";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>;

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = await getDictionary(locale);
  const ogLocale = locale === "vi" ? "vi_VN" : "en_US";
  const alternateLocale = locale === "vi" ? "en_US" : "vi_VN";
  const canonicalUrl = getCanonicalUrl(`/${locale}`);
  const ogImageUrl = getCanonicalUrl(
    "/images/hero/hero-industrial-intelligence-v1-1280.webp",
  );

  return {
    title: {
      absolute: dictionary.metadata.title,
    },
    description: dictionary.metadata.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "vi-VN": getCanonicalUrl("/vi"),
        en: getCanonicalUrl("/en"),
        "x-default": getCanonicalUrl("/vi"),
      },
    },
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      url: canonicalUrl,
      siteName: company.brandName,
      locale: ogLocale,
      alternateLocale,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1280,
          height: 720,
          alt: dictionary.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      images: [ogImageUrl],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return children;
}
