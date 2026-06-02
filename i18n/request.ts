import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale: locale as Locale,
    // Adjusted relative path to point correctly to root /messages folder
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
