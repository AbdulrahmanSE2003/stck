"use server";

import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

export async function signInWithEmail(
  _prevState: { error: string } | null,
  formData: FormData,
) {
  const { error } = await auth.signIn.email({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (error) {
    return { error: error.message || "Authentication trace failed" };
  }

  // Route back to base localization interface on validation success
  redirect("/");
}
