import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Navigation, MapPin, Clock, Wind, Leaf } from "lucide-react";
import { useState } from "react";

const SafeRoutePlanner = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [routes, setRoutes] = useState<any[]>([]);

  const handlePlanRoute = () => {
    // Simulated route results
    setRoutes([
      {
        name: "Cleanest Route",
        distance: "5.2 km",
        duration: "18 min",
        avgAQI: 68,
        pollutantExposure: "Low",
        type: "walking"
      },
      {
        name: "Fastest Route",
        distance: "4.8 km",
        duration: "12 min",
        avgAQI: 142,
        pollutantExposure: "High",
        type: "cycling"
      },
      {
        name: "Balanced Route",
        distance: "5.0 km",
        duration: "15 min",
        avgAQI: 95,
        pollutantExposure: "Moderate",
        type: "walking"
      }
    ]);
  };

  const getAQIColor = (aqi: number) => {
    if (aqi < 50) return "text-green-600";
    if (aqi < 100) return "text-yellow-600";
    if (aqi < 150) return "text-orange-600";
    return "text-red-600";
  };

  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardTitle className="flex items-center gap-2">
          <Navigation className="w-6 h-6 text-primary" />
          National Safe Route Planner
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Input Section */}
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium mb-2 block">From</label>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your current location" 
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                />
                <Button variant="outline" size="icon">
                  <MapPin className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">To</label>
              <Input 
                placeholder="Your destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <Button className="w-full" onClick={handlePlanRoute}>
              <Navigation className="w-4 h-4 mr-2" />
              Find Cleanest Route
            </Button>
          </div>

          {/* Routes Results */}
          {routes.length > 0 && (
            <div className="space-y-3 pt-4 border-t">
              <h4 className="font-medium">Route Options</h4>
              {routes.map((route, idx) => (
                <div 
                  key={idx}
                  className="p-4 border rounded-lg hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {idx === 0 && <Leaf className="w-5 h-5 text-green-600" />}
                      <h5 className="font-bold">{route.name}</h5>
                    </div>
                    <Badge variant={
                      route.pollutantExposure === "Low" ? "default" :
                      route.pollutantExposure === "Moderate" ? "secondary" :
                      "destructive"
                    }>
                      {route.pollutantExposure}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{route.duration}</div>
                        <div className="text-xs text-muted-foreground">{route.distance}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wind className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <div className={`font-bold ${getAQIColor(route.avgAQI)}`}>
                          AQI {route.avgAQI}
                        </div>
                        <div className="text-xs text-muted-foreground">Average</div>
                      </div>
                    </div>
                    <div className="flex items-end justify-end">
                      <Button variant="outline" size="sm">
                        Select Route
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {routes.length === 0 && (
            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <Navigation className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">Enter your route to see air quality optimized paths</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SafeRoutePlanner;
