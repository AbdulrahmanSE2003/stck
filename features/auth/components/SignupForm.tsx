"use client";

import { Button } from "@/components/ui/button";
import Input from "@/components/ui/Input";
import { SignUpWithEmail } from "@/lib/auth/sign-up/actions";
import { useLocale, useTranslations } from "next-intl";
import { useActionState } from "react";

const formInputs = [
  { name: "name", type: "text", placeholder: "John Doe", label: "name" },
  {
    name: "email",
    type: "email",
    placeholder: "name@company.com",
    label: "email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "••••••••",
    label: "password",
  },
];

const SigninForm = () => {
  const lang = useLocale();

  const t = useTranslations("Auth");
  const [state, formAction, isPending] = useActionState(SignUpWithEmail, null);

  return (
    <form
      action={formAction}
      className="w-full max-w-sm border border-zinc-800 bg-zinc-800/50 p-8 rounded-sm flex flex-col gap-6 text-start"
    >
      <div className={`flex flex-col gap-2`}>
        <h2 className="text-xl font-semibold ">{t("signIn")}</h2>
        <p className={`paragraph text-[13px]`}>{t("intro-signup")}</p>
      </div>
      <input type="hidden" value={lang} name="lang" />
      {formInputs.map((ip) => (
        <Input
          key={ip.name}
          name={ip.name}
          type={ip.type}
          placeholder={ip.placeholder}
          label={ip.label}
        />
      ))}

      {state?.error && (
        <p className="text-xs font-mono text-red-500">{state.error}</p>
      )}
      <Button
        type="submit"
        variant={"brand"}
        disabled={isPending}
        className="bg-main-teal/85 cursor-pointer text-black py-2 text-xs tracking-wider uppercase font-bold hover:bg-main-teal transition-colors duration-200"
      >
        {isPending ? t("signing-up") : t("sign-up")}
      </Button>
    </form>
  );
};

export default SigninForm;
