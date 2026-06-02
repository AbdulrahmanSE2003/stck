import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth/auth";
import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n/request";

const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: "en",
  localePrefix: "always",
});

export default async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const segments = pathname.split("/");
  const detectedLocale =
    locales.find((locale) => segments.includes(locale)) || "en";

  const cleanPath = pathname.replace(`/${detectedLocale}`, "");

  const isPublicRoute =
    cleanPath === "" ||
    cleanPath === "/" ||
    cleanPath.startsWith("/sign-in") ||
    cleanPath.startsWith("/sign-up");

  if (isPublicRoute) {
    return intlMiddleware(req);
  }

  const authResponse = await auth.middleware({
    loginUrl: `/${detectedLocale}/sign-in`,
  })(req);

  if (authResponse && authResponse.status !== 200) {
    return authResponse;
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(id-IQ|ar|en)/:path*", "/((?!_next|api|.*\\..*).*)"],
};
