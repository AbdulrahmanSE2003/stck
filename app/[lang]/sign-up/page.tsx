import { Package } from "lucide-react";
import SignUpForm from "@/features/auth/components/SignupForm";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h2 className={`flex items-center gap-1 my-6`}>
        <Package className={`text-main-teal size-8 order-1`} />
        <span className="text-xl text-left font-bold uppercase tracking-wider ">
          stck
        </span>
      </h2>
      <SignUpForm />
    </div>
  );
}
