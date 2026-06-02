import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { PackageIcon } from "lucide-react";
import Link from "next/link";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

const Header = () => {
  const t = useTranslations("Header");

  return (
    <header className="w-full flex justify-between items-center px-6 p-4">
      <Link
        href="/"
        className="flex items-center gap-3 text-xl font-semibold text-start"
      >
        <PackageIcon className="text-main-teal" />
        <span>{t("logoText")}</span>
      </Link>
      <div className={`flex items-center gap-3`}>
        <Button className="px-3">
          <Link href="sign-in">{t("signIn")}</Link>
        </Button>
        <LanguageToggle />
      </div>
    </header>
  );
};

export default Header;
