"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";
import { SUPPORTED_LOCALES, isLocale } from "@/i18n/locales";

type LocaleSwitchProps = {
  className?: string;
  currentLocale: Locale;
  dictionary: Dictionary;
  onNavigate?: () => void;
};

export function LocaleSwitch({
  className,
  currentLocale,
  dictionary,
  onNavigate,
}: LocaleSwitchProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label={dictionary.localeSwitchLabel}
      className={["locale-switch", className].filter(Boolean).join(" ")}
    >
      {SUPPORTED_LOCALES.map((locale) => (
        <Link
          aria-current={locale === currentLocale ? "page" : undefined}
          className="locale-switch__link"
          href={getLocalizedPath(pathname, locale)}
          hrefLang={locale}
          key={locale}
          onClick={onNavigate}
        >
          {dictionary.localeNames[locale]}
        </Link>
      ))}
    </nav>
  );
}

function getLocalizedPath(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/");
  const currentLocale = segments[1];

  if (currentLocale && isLocale(currentLocale)) {
    segments[1] = nextLocale;
    return segments.join("/") || `/${nextLocale}`;
  }

  return `/${nextLocale}${pathname === "/" ? "" : pathname}`;
}
