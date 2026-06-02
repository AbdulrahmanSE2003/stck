import { getTranslations } from "next-intl/server";

export default async function InventoryHeader() {
  // Initialize scoped translation hook for Server Components
  const t = await getTranslations("Inventory");

  return (
    <header className="border-b border-border p-6 bg-card">
      <div className="flex flex-col gap-1 text-start">
        {/* Logical property text-start aligns to left in LTR and right in RTL */}
        <h1 className="text-2xl font-bold tracking-tight text-card-foreground">
          {t("title")}
        </h1>
        <p className="text-sm text-muted-foreground">{t("description")}</p>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            className="w-full rounded-md border border-input bg-transparent py-2 ps-10 pe-4 text-sm outline-none focus:border-primary"
          />
        </div>
      </div>
    </header>
  );
}
