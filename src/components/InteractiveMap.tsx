import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ZoomIn, ZoomOut, Layers, Navigation, Maximize2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface InteractiveMapProps {
  title?: string;
  showControls?: boolean;
  showLegend?: boolean;
  height?: string;
}

const InteractiveMap = ({ 
  title = "Air Quality Heatmap",
  showControls = true,
  showLegend = true,
  height = "h-96"
}: InteractiveMapProps) => {
  return (
    <Card className="p-6">
      {title && <h3 className="text-2xl font-bold mb-4">{title}</h3>}
      
      <div className={`bg-muted/50 rounded-lg ${height} relative overflow-hidden group`}>
        {/* Map Controls */}
        {showControls && (
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            <Button size="icon" variant="secondary" className="shadow-lg">
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="secondary" className="shadow-lg">
              <ZoomOut className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="secondary" className="shadow-lg">
              <Layers className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="secondary" className="shadow-lg">
              <Maximize2 className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Location Markers Simulation */}
        <div className="absolute inset-0">
          {[
            { x: "25%", y: "30%", aqi: 85, label: "Delhi NCR" },
            { x: "60%", y: "45%", aqi: 142, label: "Industrial Zone" },
            { x: "40%", y: "60%", aqi: 68, label: "Green Belt" },
            { x: "70%", y: "25%", aqi: 178, label: "City Center" },
            { x: "15%", y: "70%", aqi: 95, label: "Residential" },
          ].map((marker, idx) => (
            <div
              key={idx}
              className="absolute group/marker cursor-pointer transition-transform hover:scale-125"
              style={{ left: marker.x, top: marker.y }}
            >
              <div className={`w-4 h-4 rounded-full ${
                marker.aqi < 50 ? 'bg-aqi-good' :
                marker.aqi < 100 ? 'bg-aqi-moderate' :
                marker.aqi < 150 ? 'bg-aqi-poor' :
                marker.aqi < 200 ? 'bg-aqi-unhealthy' :
                'bg-aqi-severe'
              } animate-pulse-glow`}>
                <div className="absolute inset-0 rounded-full opacity-50 animate-ping"></div>
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover/marker:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-card border shadow-lg rounded-lg px-3 py-2 text-xs whitespace-nowrap">
                  <div className="font-bold">{marker.label}</div>
                  <div className="text-muted-foreground">AQI: {marker.aqi}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center opacity-50 group-hover:opacity-30 transition-opacity">
            <Navigation className="w-16 h-16 text-muted-foreground mx-auto mb-4 animate-pulse" />
            <p className="text-muted-foreground font-medium">Interactive Map Visualization</p>
            <p className="text-sm text-muted-foreground mt-2">Street-level AQI • Real-time updates</p>
          </div>
        </div>

        {/* AQI Legend */}
        {showLegend && (
          <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm border rounded-lg p-3 shadow-lg">
            <div className="text-xs font-bold mb-2">AQI Scale</div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-aqi-good"></div>
                <span>0-50 Good</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-aqi-moderate"></div>
                <span>51-100 Moderate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-aqi-poor"></div>
                <span>101-150 Poor</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-aqi-unhealthy"></div>
                <span>151-200 Unhealthy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-aqi-severe"></div>
                <span>200+ Severe</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default InteractiveMap;
