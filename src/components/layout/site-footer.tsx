import Link from "next/link";
import { Container } from "@/components/layout/container";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";
import { SUPPORTED_LOCALES } from "@/i18n/locales";

type SiteFooterProps = Readonly<{
  currentLocale: Locale;
  dictionary: Dictionary;
}>;

const footerNavItems = [
  { key: "about", href: "#about" },
  { key: "capabilities", href: "#capabilities" },
  { key: "manufacturing", href: "#manufacturing" },
  { key: "contact", href: "#contact" },
] as const;

export function SiteFooter({ currentLocale, dictionary }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">{dictionary.brandName}</p>
          <p className="site-footer__legal">{dictionary.footer.legalName}</p>
          <p className="site-footer__slogan">{dictionary.slogan}</p>
        </div>

        <nav
          aria-label={dictionary.footer.navigationLabel}
          className="site-footer__nav"
        >
          {footerNavItems.map((item) => (
            <a href={item.href} key={item.key}>
              {dictionary.navigation[item.key]}
            </a>
          ))}
        </nav>

        <div className="site-footer__meta">
          <p>
            {dictionary.footer.establishedLabel}:{" "}
            {dictionary.footer.establishedValue}
          </p>
          <nav
            aria-label={dictionary.footer.localeLabel}
            className="site-footer__locales"
          >
            {SUPPORTED_LOCALES.map((locale) => (
              <Link
                aria-current={locale === currentLocale ? "page" : undefined}
                href={`/${locale}`}
                hrefLang={locale}
                key={locale}
              >
                {dictionary.localeNames[locale]}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
