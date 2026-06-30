import { company, getCompanyAddress } from "@/content/company";
import type { Locale } from "@/i18n/locales";

type OrganizationJsonLdProps = Readonly<{
  locale: Locale;
}>;

export function OrganizationJsonLd({ locale }: OrganizationJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.brandName,
    legalName: company.legalName,
    url: company.canonicalDomain,
    email: company.email,
    telephone: company.phoneInternational,
    address: getCompanyAddress(locale),
    foundingDate: company.establishedYear,
    slogan: company.slogan,
  };

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replaceAll("<", "\\u003c"),
      }}
      type="application/ld+json"
    />
  );
}
