import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FeaturesSection from "@/components/features-section"
import HowItWorksSection from "@/components/how-it-works-section"
import MultilingualSection from "@/components/multilingual-section"
import PricingSection from "@/components/pricing-section"
import DashboardPreviewSection from "@/components/dashboard-preview-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <MultilingualSection />
      <PricingSection />
      <DashboardPreviewSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
