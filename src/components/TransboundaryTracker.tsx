import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wind, AlertTriangle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const TransboundaryTracker = () => {
  const pollutionFlows = [
    {
      from: "Punjab",
      to: "Delhi NCR",
      pollutant: "PM2.5 from Stubble Burning",
      contribution: "35%",
      severity: "High",
      trend: "up"
    },
    {
      from: "Uttar Pradesh",
      to: "Delhi NCR",
      pollutant: "Industrial Emissions",
      contribution: "22%",
      severity: "Medium",
      trend: "stable"
    },
    {
      from: "Haryana",
      to: "Delhi NCR",
      pollutant: "Vehicular & Agricultural",
      contribution: "18%",
      severity: "Medium",
      trend: "down"
    }
  ];

  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-secondary/10 to-accent/10">
        <CardTitle className="flex items-center gap-2">
          <Wind className="w-6 h-6 text-secondary" />
          Transboundary Pollution Tracker
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {pollutionFlows.map((flow, idx) => (
            <div 
              key={idx}
              className="p-4 border rounded-lg hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold">{flow.from}</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="font-bold text-primary">{flow.to}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{flow.pollutant}</p>
                </div>
                <Badge variant={flow.severity === "High" ? "destructive" : "secondary"}>
                  {flow.severity}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">{flow.contribution}</div>
                    <div className="text-xs text-muted-foreground">Contribution</div>
                  </div>
                  <div className="flex items-center gap-1">
                    {flow.trend === "up" && <TrendingUp className="w-4 h-4 text-destructive" />}
                    {flow.trend === "down" && <TrendingUp className="w-4 h-4 text-green-600 rotate-180" />}
                    {flow.trend === "stable" && <div className="w-4 h-0.5 bg-muted-foreground" />}
                    <span className="text-xs text-muted-foreground capitalize">{flow.trend}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm mb-1">Active Alert: Stubble Burning Season</h4>
            <p className="text-xs text-muted-foreground">
              Punjab and Haryana showing increased agricultural burning. Coordinated action required.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransboundaryTracker;
