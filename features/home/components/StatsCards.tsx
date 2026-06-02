import {
  ChartBarIcon,
  PackageIcon,
  ShieldCheckIcon,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: PackageIcon,
    title: "Track Everything",
    description: "Monitor stock levels across multiple warehouses in real-time",
  },
  {
    icon: ChartBarIcon,
    title: "Analytics",
    description:
      "Get insights on inventory turnover and stock movement patterns",
  },
  {
    icon: Users,
    title: "Supplier Management",
    description: "Manage relationships and orders with all your suppliers",
  },
  {
    icon: ShieldCheckIcon,
    title: "Enterprise Security",
    description: "SOC 2 compliant with role-based access control",
  },
];

const StatsCards = () => {
  return (
    <section
      className={`px-20 py-20 sm:px-10 grid sm:grid-cols-2 md:grid-cols-4 items-center gap-6 gap-y-8`}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`bg-zinc-800/75 rounded-lg p-6 flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-300`}
        >
          <stat.icon className={`text-main-teal size-8`} />
          <h3 className={`text-lg font-semibold`}>{stat.title}</h3>
          <p className={`text-zinc-400 text-md line-clamp-3 h-18`}>
            {stat.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default StatsCards;
