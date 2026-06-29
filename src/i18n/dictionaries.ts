import en from "@/content/en/common";
import vi from "@/content/vi/common";
import type { Locale } from "@/i18n/locales";

const dictionaries = {
  vi,
  en,
} as const;

export type Dictionary = (typeof dictionaries)[keyof typeof dictionaries];

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale];
}
