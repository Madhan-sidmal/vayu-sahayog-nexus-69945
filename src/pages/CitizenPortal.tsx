import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, AlertCircle, Users, ArrowRight, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveMap from "@/components/InteractiveMap";
import CitizenReportForm from "@/components/CitizenReportForm";
import { Badge } from "@/components/ui/badge";
import SafeRoutePlanner from "@/components/SafeRoutePlanner";
import CommunityWatchFeed from "@/components/CommunityWatchFeed";

const CitizenPortal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">For All Indians</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Citizen & Community Portal
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Know your air, plan your routes, and participate in building a cleaner India
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <Card className="p-6 hover:shadow-lg transition-all">
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Know Your Air Map</h3>
                <p className="text-muted-foreground mb-4">
                  View real-time street-level air quality data for your neighborhood
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Map <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <Navigation className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">Safe Route Planner</h3>
                <p className="text-muted-foreground mb-4">
                  Find the cleanest air routes for walking, cycling, or commuting
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('route-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Plan Route <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <AlertCircle className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Report & Track</h3>
                <p className="text-muted-foreground mb-4">
                  Report pollution sources and track resolution status
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('report-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Report Issue <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <Users className="w-12 h-12 text-primary-light mb-4" />
                <h3 className="text-xl font-bold mb-2">Community Watch</h3>
                <p className="text-muted-foreground mb-4">
                  Join local communities to monitor and improve air quality together
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('community-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join Community <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Interactive Map */}
        <section id="map-section" className="py-16 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <InteractiveMap title="Know Your Air - Live Map" height="h-[500px]" />
            </div>
          </div>
        </section>

        {/* Report & Community Section */}
        <section id="report-section" className="py-16 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
              <div id="community-section">
                <CitizenReportForm />
              </div>
              <CommunityWatchFeed />
            </div>
          </div>
        </section>

        {/* Safe Routes Section */}
        <section id="route-section" className="py-16 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SafeRoutePlanner />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CitizenPortal;
