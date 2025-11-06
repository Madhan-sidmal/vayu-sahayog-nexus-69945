import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const aqiLevels = [
  { label: "Good", range: "0-50", color: "bg-aqi-good", desc: "Minimal health impact" },
  { label: "Moderate", range: "51-100", color: "bg-aqi-moderate", desc: "Acceptable for most" },
  { label: "Poor", range: "101-200", color: "bg-aqi-poor", desc: "May affect sensitive groups" },
  { label: "Unhealthy", range: "201-300", color: "bg-aqi-unhealthy", desc: "Health effects for everyone" },
  { label: "Severe", range: "301+", color: "bg-aqi-severe", desc: "Serious health warnings" },
];

const sampleCities = [
  { name: "Delhi", aqi: 287, lat: "28.6°N", status: "unhealthy" },
  { name: "Mumbai", aqi: 142, lat: "19.1°N", status: "poor" },
  { name: "Bangalore", aqi: 68, lat: "12.9°N", status: "moderate" },
  { name: "Kolkata", aqi: 198, lat: "22.6°N", status: "poor" },
  { name: "Chennai", aqi: 54, lat: "13.1°N", status: "moderate" },
  { name: "Hyderabad", aqi: 89, lat: "17.4°N", status: "moderate" },
];

const getAQIColor = (aqi: number) => {
  if (aqi <= 50) return "text-aqi-good";
  if (aqi <= 100) return "text-aqi-moderate";
  if (aqi <= 200) return "text-aqi-poor";
  if (aqi <= 300) return "text-aqi-unhealthy";
  return "text-aqi-severe";
};

const getAQIBg = (aqi: number) => {
  if (aqi <= 50) return "bg-aqi-good/10 border-aqi-good/30";
  if (aqi <= 100) return "bg-aqi-moderate/10 border-aqi-moderate/30";
  if (aqi <= 200) return "bg-aqi-poor/10 border-aqi-poor/30";
  if (aqi <= 300) return "bg-aqi-unhealthy/10 border-aqi-unhealthy/30";
  return "bg-aqi-severe/10 border-aqi-severe/30";
};

const AQIVisualization = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real-Time National
            <span className="block text-primary mt-2">Air Quality Index</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Live monitoring across India with color-coded AQI standards for instant understanding
          </p>
        </div>

        {/* AQI Scale */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              AQI Classification Scale
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              {aqiLevels.map((level, index) => (
                <div 
                  key={level.label}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`${level.color} h-3 rounded-full mb-3`} />
                  <div className="font-bold text-foreground">{level.label}</div>
                  <div className="text-sm text-muted-foreground mb-2">{level.range}</div>
                  <div className="text-xs text-muted-foreground">{level.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 h-4 rounded-full bg-gradient-aqi" />
          </Card>
        </div>

        {/* Sample City Data */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Live Metropolitan Air Quality
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleCities.map((city, index) => (
              <Card 
                key={city.name}
                className={`p-6 border-2 animate-fade-in-up ${getAQIBg(city.aqi)}`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <h4 className="font-bold text-lg text-foreground">{city.name}</h4>
                      <p className="text-xs text-muted-foreground">{city.lat}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold ${getAQIColor(city.aqi)}`}>
                      {city.aqi}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase">AQI</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">PM2.5</span>
                    <span className="font-medium">{Math.round(city.aqi * 0.6)} µg/m³</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">PM10</span>
                    <span className="font-medium">{Math.round(city.aqi * 0.8)} µg/m³</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="text-xs text-muted-foreground">
                    Last updated: Just now • Live monitoring
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Access detailed heatmaps and historical trends for every location in India
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Live data updating every 15 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AQIVisualization;
