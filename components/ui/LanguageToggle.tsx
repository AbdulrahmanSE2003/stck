"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./button";
import { GlobeIcon } from "lucide-react";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ar" : "en";

    const redirectedPathname = pathname.replace(`/${locale}`, `/${nextLocale}`);

    router.push(redirectedPathname);
  };

  return (
    <Button
      variant="ghost"
      className={`border border-zinc-600`}
      onClick={toggleLanguage}
    >
      {locale === "en" ? "العربية" : "English"}
      <GlobeIcon />
    </Button>
  );
}
