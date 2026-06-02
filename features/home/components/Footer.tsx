import { useTranslations } from "next-intl";

const Footer = () => {
  // Access translations from the 'Footer' namespace
  const t = useTranslations("Footer");

  return (
    <footer className="text-gray-500 text-sm text-center py-4 border-t-2 border-t-zinc-800 px-10">
      © {new Date().getFullYear()} STCK. {t("rights")}
    </footer>
  );
};

export default Footer;
