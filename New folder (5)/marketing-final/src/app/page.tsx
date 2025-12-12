import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import ServiceCards from "../components/ServiceCards";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";

import ModernStatsSection from "../components/ModernStatsSection";
import TestimonialSlider from "../components/TestimonialSlider";
import VideoSection from "../components/VideoSection";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSlider />      
      <ModernStatsSection />
      <ServiceCards />      
      <Pricing />
      <TestimonialSlider />
      <VideoSection />
      <Footer />
    </div>
  );
}
