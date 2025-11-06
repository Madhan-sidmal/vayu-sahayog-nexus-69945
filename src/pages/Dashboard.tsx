import { Card } from "@/components/ui/card";
import { MapPin, TrendingUp, AlertCircle, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveMap from "@/components/InteractiveMap";
import { AQITrendChart, AreaTrendChart } from "@/components/AQIChart";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                National Air Quality Dashboard
              </h1>
              <p className="text-xl text-white/90">
                Real-time monitoring across India with street-level precision
              </p>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <Card className="p-6 text-center">
                <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">4,000+</div>
                <div className="text-muted-foreground">Cities Monitored</div>
              </Card>
              
              <Card className="p-6 text-center">
                <TrendingUp className="w-10 h-10 text-secondary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-muted-foreground">Real-Time Data</div>
              </Card>
              
              <Card className="p-6 text-center">
                <AlertCircle className="w-10 h-10 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">156</div>
                <div className="text-muted-foreground">Active Alerts</div>
              </Card>
              
              <Card className="p-6 text-center">
                <Users className="w-10 h-10 text-primary-light mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">1.4B+</div>
                <div className="text-muted-foreground">Citizens Served</div>
              </Card>
            </div>

            {/* Map */}
            <div className="max-w-7xl mx-auto mb-12">
              <InteractiveMap title="National AQI Map" height="h-[500px]" />
            </div>

            {/* Charts */}
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              <AQITrendChart />
              <AreaTrendChart />
            </div>
          </div>
        </section>

        {/* Top Cities */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Top Metro Cities</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { city: "Delhi", aqi: 178, status: "Moderate" },
                  { city: "Mumbai", aqi: 95, status: "Satisfactory" },
                  { city: "Bangalore", aqi: 68, status: "Satisfactory" },
                  { city: "Kolkata", aqi: 142, status: "Moderate" },
                  { city: "Chennai", aqi: 82, status: "Satisfactory" },
                  { city: "Hyderabad", aqi: 91, status: "Satisfactory" },
                ].map((city) => (
                  <Card key={city.city} className="p-6 hover:shadow-lg transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{city.city}</h3>
                        <p className="text-sm text-muted-foreground">{city.status}</p>
                      </div>
                      <div className="text-3xl font-bold text-primary">{city.aqi}</div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full" 
                        style={{ width: `${Math.min((city.aqi / 300) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
