import { Button } from "@/components/ui/button";
import { ArrowRight, Satellite, Wind } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero backdrop-blur-[2px]" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Satellite className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white">Powered by Advanced Satellite Data Downscaling</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Vayu Sahayog
            <span className="block text-3xl md:text-5xl mt-4 bg-gradient-to-r from-accent via-secondary-light to-secondary bg-clip-text text-transparent">
              The National Air Quality Nexus
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            India's unified ecosystem connecting CPCB, all SPCBs, industries, and citizens 
            through real-time, high-resolution pollution monitoring and collaborative governance.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Wind className="w-5 h-5 text-secondary-light" />
              <span>Street-Level Resolution</span>
            </div>
            <div className="flex items-center gap-2">
              <Satellite className="w-5 h-5 text-accent" />
              <span>Nationwide Coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gradient-aqi rounded" />
              <span>Real-Time AQI</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link to="/citizen">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8 py-6 rounded-xl font-semibold"
              >
                Explore Portals
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6 rounded-xl font-semibold"
              >
                View National Dashboard
              </Button>
            </Link>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">36</div>
              <div className="text-sm md:text-base text-white/70 mt-2">States & UTs Connected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent">24/7</div>
              <div className="text-sm md:text-base text-white/70 mt-2">Real-Time Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary-light">1.4B+</div>
              <div className="text-sm md:text-base text-white/70 mt-2">Citizens Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">100%</div>
              <div className="text-sm md:text-base text-white/70 mt-2">National Coverage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
