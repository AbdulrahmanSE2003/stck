import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <div className="flex flex-col gap-5 sm:gap-3 items-center justify-center text-center my-10 h-[50vh]">
      <h1 className="tracking-wide text-4xl font-semibold max-w-2xl">
        {t("title")}
      </h1>
      <p className="paragraph text-lg max-w-md sm:max-w-lg">
        {t("description")}
      </p>

      <div className="flex items-center gap-6">
        <Button
          asChild
          size="lg"
          className="bg-main-teal/85 text-md px-4 py-5 text-black hover:bg-sec-teal group"
        >
          <Link href="/sign-up" className="flex items-center gap-2">
            <span>{t("getStarted")}</span>
            <ArrowUpRightIcon className="group-hover:rotate-45 transition-transform duration-500 size-5" />
          </Link>
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="text-md px-8 py-5 bg-zinc-400 text-black hover:bg-zinc-500"
        >
          <span>{t("seeMore")}</span>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
