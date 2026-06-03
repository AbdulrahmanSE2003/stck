"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { signInWithEmail } from "@/lib/auth/sign-in/actions";
import { Package } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  const t = useTranslations("SignIn");
  const [state, formAction, isPending] = useActionState(signInWithEmail, null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h2 className={`flex items-center gap-1 my-6`}>
        <Package className={`text-main-teal size-8 `} />
        <span className="text-xl font-bold uppercase tracking-wider">
          stck.
        </span>
      </h2>
      <form
        action={formAction}
        className="w-full max-w-sm border border-zinc-800 bg-zinc-800/50 p-8 rounded-sm flex flex-col gap-6 text-start"
      >
        <div className={`flex flex-col gap-2`}>
          <h2 className="text-xl font-semibold ">{t("signIn")}</h2>
          <p className={`paragraph text-[13px]`}>{t("intro")}</p>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-mono text-zinc-300 uppercase">
            {t("email")}
          </label>
          <input
            name="email"
            type="email"
            placeholder="name@company.com"
            required
            className="w-full rounded-sm border border-zinc-800 px-3 py-1.5 text-sm outline-none focus:ring-sec-teal focus:ring-1 focus:border-sec-teal transition-colors duration-300"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-mono text-zinc-300 uppercase">
            {t("password")}
          </label>
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            required
            className="w-full rounded-sm border border-zinc-800 px-3 py-2 text-sm outline-none focus:ring-sec-teal focus:ring-1 focus:border-sec-teal transition-colors duration-300"
          />
        </div>

        {state?.error && (
          <p className="text-xs font-mono text-red-500">{state.error}</p>
        )}

        <Button
          type="submit"
          variant={"brand"}
          disabled={isPending}
          className="bg-main-teal/85 cursor-pointer text-black py-2 text-xs tracking-wider uppercase font-bold hover:bg-main-teal transition-colors duration-200"
        >
          {isPending ? t("action-running") : t("action")}
        </Button>
      </form>
    </div>
  );
}
