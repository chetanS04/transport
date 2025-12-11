import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import ServiceCards from "../components/ServiceCards";
import ServiceCards2 from "../components/ServiceCards2";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import StatsSection1 from "../components/StatsSection";
import { Check, Zap } from "lucide-react";
import ModernStatsSection from "../components/ModernStatsSection";
import TestimonialSlider from "../components/TestimonialSlider";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSlider />
      
      <ModernStatsSection />
      <ServiceCards />      
      <Pricing />
      <TestimonialSlider />
      <Footer />
    </div>
  );
}
