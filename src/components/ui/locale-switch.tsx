import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";
import { SUPPORTED_LOCALES } from "@/i18n/locales";

type LocaleSwitchProps = {
  currentLocale: Locale;
  dictionary: Dictionary;
};

export function LocaleSwitch({
  currentLocale,
  dictionary,
}: LocaleSwitchProps) {
  return (
    <nav aria-label={dictionary.localeSwitchLabel} className="locale-switch">
      {SUPPORTED_LOCALES.map((locale) => (
        <Link
          aria-current={locale === currentLocale ? "page" : undefined}
          className="locale-switch__link"
          href={`/${locale}`}
          hrefLang={locale}
          key={locale}
        >
          {dictionary.localeNames[locale]}
        </Link>
      ))}
    </nav>
  );
}
