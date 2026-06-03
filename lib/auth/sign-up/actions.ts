"use server";

import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

export async function SignUpWithEmail(
  _prevState: { error: string } | null,
  formData: FormData,
) {
  const { error } = await auth.signUp.email({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    name: formData.get("name") as string,
  });

  if (error) {
    return { error: error.message || "Authentication trace failed" };
  }
  const lang = formData.get("lang") as string;

  // Route back to base localization interface on validation success
  redirect(`/${lang}/dashboard`);
}
