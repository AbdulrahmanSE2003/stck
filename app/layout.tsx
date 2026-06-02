import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { locales, Locale } from "@/i18n/request";
import "@/app/globals.css";

interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const direction = lang === "ar" ? "rtl" : "ltr";
  const messages = await getMessages();

  return (
    <html lang={lang} dir={direction}>
      <body className="bg-background text-foreground antialiased minimal-scrollbar">
        <NextIntlClientProvider messages={messages} locale={lang}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
