import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortalCards from "@/components/PortalCards";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import AQIVisualization from "@/components/AQIVisualization";
import ImpactSection from "@/components/ImpactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PortalCards />
      <AQIVisualization />
      <FeaturesShowcase />
      <ImpactSection />
      <Footer />
    </div>
  );
};

export default Index;
