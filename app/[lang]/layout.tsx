import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { locales } from "@/i18n/request";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/app/[lang]/globals.css";
import { cn } from "@/lib/utils";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata = {
  title: "stck. - Inventoy management made simple",
  description:
    "stck. is a simple inventory management system built with Next.js, Prisma, and Tailwind CSS. It provides an intuitive interface for managing your inventory, tracking stock levels, and generating reports. With stck., you can easily keep track of your products and streamline your inventory management process.",
};

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
      className={cn("font-sans", jakartaSans.variable)}
    >
      <body className="bg-background min-h-screen text-white antialiased minimal-scrollbar">
        <NextIntlClientProvider messages={messages} locale={lang}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
