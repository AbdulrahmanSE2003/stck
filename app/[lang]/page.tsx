import { useTranslations } from "next-intl";
import Link from "next/link";
import Headers from "@/features/home/components/Header";
import Header from "@/features/home/components/Header";

export default function LandingPage() {
  // Assuming keys are defined in your messages JSON under a 'Landing' namespace
  const t = useTranslations("Landing");

  return (
    <section className={`bg-black min-h-screen`}>
      <Header />
    </section>
  );
}
