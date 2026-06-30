import type { Locale } from "@/i18n/locales";

export const company = {
  brandName: "Ktech Việt Nam",
  legalName: "Ktech Viet Nam Company Limited",
  establishedYear: "2015",
  canonicalDomain: "https://ktechviet.com",
  email: "info@ktechviet.com",
  emailHref: "mailto:info@ktechviet.com",
  phoneDisplay: "0888 23 23 66",
  phoneInternational: "+84888232366",
  phoneHref: "tel:+84888232366",
  slogan: "Understand the universe",
  address: {
    vi: "458 Minh Khai, Vĩnh Tuy, Hà Nội, Việt Nam",
    en: "458 Minh Khai, Vinh Tuy, Hanoi, Vietnam",
  },
} as const;

export function getCompanyAddress(locale: Locale) {
  return company.address[locale];
}

export function getCanonicalUrl(path: `/${string}`) {
  return new URL(path, company.canonicalDomain).toString();
}
