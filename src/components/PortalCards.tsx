import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Factory, MapPin, ArrowRight, Shield, Database, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const portals = [
  {
    id: "governance",
    path: "/governance",
    title: "National Governance Dashboard",
    subtitle: "For CPCB & Ministry",
    description: "Strategic oversight with inter-state AQI analytics, transboundary pollution tracking, and national policy simulation tools.",
    icon: Shield,
    color: "primary",
    features: [
      "Inter-State AQI Comparison",
      "Transboundary Pollution Tracker",
      "National Policy Simulator",
      "Hotspot Identification",
    ],
  },
  {
    id: "regulatory",
    path: "/regulator",
    title: "State & City Regulator Portal",
    subtitle: "For SPCBs & Municipalities",
    description: "Localized enforcement with state-wide intelligence dashboards, industrial compliance monitoring, and citizen report management.",
    icon: Building2,
    color: "secondary",
    features: [
      "State-Wide Intelligence Dashboard",
      "Industrial Compliance Monitor",
      "Citizen Report Triage",
      "Health Alert Broadcasting",
    ],
  },
  {
    id: "industrial",
    path: "/industry",
    title: "National Industrial Portal",
    subtitle: "For Registered Industries",
    description: "Unified compliance management with digital fenceline monitoring, real-time emission tracking, and standardized reporting.",
    icon: Factory,
    color: "accent",
    features: [
      "Consolidated Compliance Dashboard",
      "Digital Fenceline Monitoring",
      "Standardized Digital Reporting",
      "Multi-Facility Management",
    ],
  },
  {
    id: "citizen",
    path: "/citizen",
    title: "Citizen & Community Portal",
    subtitle: "For All Indians",
    description: "Public empowerment through interactive pollution maps, safe route planning, and community-driven pollution reporting.",
    icon: Users,
    color: "primary-light",
    features: [
      "Know Your Air Map",
      "Safe Route Planner",
      "Report & Track System",
      "Community Watch Dashboard",
    ],
  },
];

const PortalCards = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Four Specialized Portals,
            <span className="block text-primary mt-2">One National Ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A federated architecture connecting every stakeholder in India's air quality journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {portals.map((portal, index) => {
            const Icon = portal.icon;
            return (
              <Card 
                key={portal.id}
                className="group p-8 hover:shadow-glow transition-all duration-500 border-2 animate-fade-in-up bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-2xl bg-${portal.color}/10 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 text-${portal.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {portal.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">
                        {portal.subtitle}
                      </p>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {portal.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {portal.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to={portal.path}>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      >
                        Access Portal
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Technology Highlight */}
        <div className="mt-16 max-w-5xl mx-auto">
          <Card className="p-8 bg-gradient-sky text-white border-0">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Database className="w-10 h-10" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3">
                  Powered by Satellite Data Downscaling Engine
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Advanced geospatial AI transforms coarse satellite imagery into street-level pollution heatmaps 
                  using regression and interpolation models, providing unprecedented 10-meter resolution nationwide coverage.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="text-center">
                  <div className="text-4xl font-bold">10m</div>
                  <div className="text-sm text-white/80">Resolution</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortalCards;
