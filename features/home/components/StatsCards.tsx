import { useTranslations } from "next-intl";
import {
  ChartBarIcon,
  PackageIcon,
  ShieldCheckIcon,
  Users,
} from "lucide-react";

const StatsCards = () => {
  // Access translations from the 'StatsCards' namespace
  const t = useTranslations("StatsCards");
  const stats = [
    {
      icon: PackageIcon,
      title: t("trackEverythingTitle"),
      description: t("trackEverythingDesc"),
    },
    {
      icon: ChartBarIcon,
      title: t("analyticsTitle"),
      description: t("analyticsDesc"),
    },
    {
      icon: Users,
      title: t("supplierManagementTitle"),
      description: t("supplierManagementDesc"),
    },
    {
      icon: ShieldCheckIcon,
      title: t("enterpriseSecurityTitle"),
      description: t("enterpriseSecurityDesc"),
    },
  ];

  return (
    <section className="px-20 py-20 sm:px-10 grid sm:grid-cols-2 md:grid-cols-4 items-center gap-6 gap-y-8">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-zinc-800/75 rounded-lg p-6 flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-300 text-start"
        >
          <stat.icon className="text-main-teal size-8" />
          <h3 className="text-lg font-semibold">{stat.title}</h3>
          <p className="text-zinc-400 text-md line-clamp-3 h-18">
            {stat.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default StatsCards;
