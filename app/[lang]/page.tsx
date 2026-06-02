import { useTranslations } from "next-intl";
import Header from "@/features/home/components/Header";
import Hero from "@/features/home/components/Hero";
import StatsCards from "@/features/home/components/StatsCards";
import Footer from "@/features/home/components/Footer";

export default function LandingPage() {
  // Assuming keys are defined in your messages JSON under a 'Landing' namespace
  const t = useTranslations("Landing");

  return (
    <section className={`bg-black min-h-screen`}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Landing Cards */}
      <StatsCards />

      {/* Footer */}
      <Footer />
    </section>
  );
}
