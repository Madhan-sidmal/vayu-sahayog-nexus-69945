import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Play, RotateCcw, TrendingDown } from "lucide-react";
import { useState } from "react";

const PolicySimulator = () => {
  const [evAdoption, setEvAdoption] = useState([30]);
  const [industrialCompliance, setIndustrialCompliance] = useState([75]);
  const [publicTransport, setPublicTransport] = useState([45]);
  const [isSimulating, setIsSimulating] = useState(false);

  const calculateImpact = () => {
    const avgValue = (evAdoption[0] + industrialCompliance[0] + publicTransport[0]) / 3;
    return Math.round(avgValue * 0.4); // Simulated reduction percentage
  };

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 2000);
  };

  const handleReset = () => {
    setEvAdoption([30]);
    setIndustrialCompliance([75]);
    setPublicTransport([45]);
    setIsSimulating(false);
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardTitle className="flex items-center gap-2">
          <TrendingDown className="w-6 h-6 text-primary" />
          National Policy Impact Simulator
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Policy Controls */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">EV Adoption Target</label>
                <Badge variant="secondary">{evAdoption[0]}%</Badge>
              </div>
              <Slider 
                value={evAdoption} 
                onValueChange={setEvAdoption}
                max={100} 
                step={5}
                className="mb-2"
              />
              <p className="text-xs text-muted-foreground">Target percentage of electric vehicles by 2030</p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Industrial Emission Standards</label>
                <Badge variant="secondary">{industrialCompliance[0]}%</Badge>
              </div>
              <Slider 
                value={industrialCompliance} 
                onValueChange={setIndustrialCompliance}
                max={100} 
                step={5}
                className="mb-2"
              />
              <p className="text-xs text-muted-foreground">Strictness of emission compliance requirements</p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Public Transport Expansion</label>
                <Badge variant="secondary">{publicTransport[0]}%</Badge>
              </div>
              <Slider 
                value={publicTransport} 
                onValueChange={setPublicTransport}
                max={100} 
                step={5}
                className="mb-2"
              />
              <p className="text-xs text-muted-foreground">Investment in metro & bus infrastructure</p>
            </div>
          </div>

          {/* Impact Projection */}
          <div className="bg-muted/50 rounded-lg p-6 text-center">
            <h4 className="text-sm font-medium mb-3">Projected AQI Reduction by 2030</h4>
            <div className={`text-5xl font-bold mb-2 ${isSimulating ? 'animate-pulse' : ''}`}>
              {isSimulating ? '...' : `-${calculateImpact()}%`}
            </div>
            <p className="text-xs text-muted-foreground">Based on combined policy implementation</p>
            
            {!isSimulating && calculateImpact() >= 30 && (
              <Badge className="mt-3" variant="default">
                Meets NCAP 2026 Target
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button 
              className="flex-1" 
              onClick={handleSimulate}
              disabled={isSimulating}
            >
              <Play className="w-4 h-4 mr-2" />
              {isSimulating ? 'Simulating...' : 'Run Simulation'}
            </Button>
            <Button variant="outline" onClick={handleReset}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PolicySimulator;
