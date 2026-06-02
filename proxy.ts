import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n/request";

export default createMiddleware({
  locales: locales,
  defaultLocale: "en",
  localePrefix: "always",
});

export const config = {
  // Catch paths accurately at the absolute root layer
  matcher: ["/", "/(id-IQ|ar|en)/:path*", "/((?!_next|api|.*\\..*).*)"],
};
