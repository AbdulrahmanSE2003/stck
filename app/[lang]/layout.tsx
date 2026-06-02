import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { locales, Locale } from "@/i18n/request";
import { Google_Sans } from "next/font/google";
import "@/app/[lang]/globals.css";
import { cn } from "@/lib/utils";

const googlSans = Google_Sans({
  subsets: ["latin"],
  variable: "--font-sf-pro",
});

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

  const direction = lang === "ar" ? "rtl" : "ltr";
  const messages = await getMessages();

  return (
    <html
      lang={lang}
      dir={direction}
      className={cn("font-sans", googlSans.className)}
    >
      <body className="bg-background min-h-screen text-white antialiased minimal-scrollbar">
        <NextIntlClientProvider messages={messages} locale={lang}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
