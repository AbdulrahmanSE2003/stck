"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { signInWithEmail } from "@/lib/auth/sign-in/actions";

export default function SignInPage() {
  const t = useTranslations("Header");
  const [state, formAction, isPending] = useActionState(signInWithEmail, null);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <form
        action={formAction}
        className="w-full max-w-sm border border-zinc-800 bg-zinc-950 p-8 rounded-sm flex flex-col gap-6 text-start"
      >
        <h2 className="text-xl font-bold tracking-tight">{t("signIn")}</h2>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-mono text-zinc-400 uppercase">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full bg-black border border-zinc-800 rounded-xs px-3 py-2 text-sm outline-none focus:border-zinc-500"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-mono text-zinc-400 uppercase">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            className="w-full bg-black border border-zinc-800 rounded-xs px-3 py-2 text-sm outline-none focus:border-zinc-500"
          />
        </div>

        {state?.error && (
          <p className="text-xs font-mono text-red-500">{state.error}</p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-white text-black py-2 rounded-xs text-xs tracking-wider uppercase font-bold hover:bg-zinc-200 transition-colors duration-200"
        >
          {isPending ? "Verifying..." : "Authenticate"}
        </button>
      </form>
    </div>
  );
}
