import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Factory, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const IndustrialComplianceMonitor = () => {
  const industries = [
    {
      name: "Steel Plant - Rourkela",
      category: "Heavy Industry",
      reportedAQI: 85,
      actualAQI: 145,
      status: "Non-Compliant",
      lastInspection: "2 weeks ago",
      flagged: true
    },
    {
      name: "Cement Factory - Ambuja",
      category: "Manufacturing",
      reportedAQI: 95,
      actualAQI: 92,
      status: "Compliant",
      lastInspection: "1 week ago",
      flagged: false
    },
    {
      name: "Thermal Plant - NTPC",
      category: "Power Generation",
      reportedAQI: 120,
      actualAQI: 138,
      status: "Under Review",
      lastInspection: "3 days ago",
      flagged: true
    },
    {
      name: "Chemical Plant - BASF",
      category: "Chemical",
      reportedAQI: 78,
      actualAQI: 75,
      status: "Compliant",
      lastInspection: "5 days ago",
      flagged: false
    }
  ];

  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-accent/10 to-destructive/10">
        <CardTitle className="flex items-center gap-2">
          <Factory className="w-6 h-6 text-accent" />
          Industrial Compliance Monitor
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-6 grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
            <div className="text-3xl font-bold text-green-600">{industries.filter(i => i.status === "Compliant").length}</div>
            <div className="text-xs text-muted-foreground">Compliant</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
            <div className="text-3xl font-bold text-yellow-600">{industries.filter(i => i.status === "Under Review").length}</div>
            <div className="text-xs text-muted-foreground">Under Review</div>
          </div>
          <div className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg">
            <div className="text-3xl font-bold text-red-600">{industries.filter(i => i.status === "Non-Compliant").length}</div>
            <div className="text-xs text-muted-foreground">Non-Compliant</div>
          </div>
        </div>

        <div className="space-y-3">
          {industries.map((industry, idx) => (
            <div 
              key={idx}
              className={`p-4 border rounded-lg transition-all ${
                industry.flagged ? 'border-destructive/50 bg-destructive/5' : 'hover:shadow-md'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold">{industry.name}</h4>
                    {industry.flagged && <AlertTriangle className="w-4 h-4 text-destructive" />}
                  </div>
                  <p className="text-sm text-muted-foreground">{industry.category}</p>
                </div>
                <Badge 
                  variant={
                    industry.status === "Compliant" ? "default" : 
                    industry.status === "Non-Compliant" ? "destructive" : 
                    "secondary"
                  }
                >
                  {industry.status === "Compliant" && <CheckCircle className="w-3 h-3 mr-1" />}
                  {industry.status === "Non-Compliant" && <XCircle className="w-3 h-3 mr-1" />}
                  {industry.status}
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                <div>
                  <div className="text-muted-foreground text-xs">Reported AQI</div>
                  <div className="font-bold">{industry.reportedAQI}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Actual AQI</div>
                  <div className={`font-bold ${
                    Math.abs(industry.actualAQI - industry.reportedAQI) > 20 ? 'text-destructive' : ''
                  }`}>
                    {industry.actualAQI}
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Variance</div>
                  <div className={`font-bold ${
                    industry.actualAQI - industry.reportedAQI > 20 ? 'text-destructive' : 'text-green-600'
                  }`}>
                    {industry.actualAQI > industry.reportedAQI ? '+' : ''}{industry.actualAQI - industry.reportedAQI}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Last inspection: {industry.lastInspection}</span>
                <Button variant="outline" size="sm">
                  Schedule Inspection
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default IndustrialComplianceMonitor;
