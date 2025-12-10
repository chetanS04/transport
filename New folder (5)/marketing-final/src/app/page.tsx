import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import ServiceCards from "../components/ServiceCards";
import ServiceCards2 from "../components/ServiceCards2";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSlider />
      <ServiceCards />
      <ServiceCards2 />
      <Footer />  
      
    </div>
  );
}
