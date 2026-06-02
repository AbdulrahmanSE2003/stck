import Header from "@/features/home/components/Header";
import Hero from "@/features/home/components/Hero";
import StatsCards from "@/features/home/components/StatsCards";
import Footer from "@/features/home/components/Footer";

export default function LandingPage() {
  return (
    <section className={`bg-black min-h-screen relative overflow-hidden`}>
      <div className="absolute top-0 left-0 -translate-x-1/2 w-250 h-100 bg-main-teal/65 rounded-full blur-[120px] pointer-events-none" />

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
