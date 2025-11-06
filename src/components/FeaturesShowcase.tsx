import { Card } from "@/components/ui/card";
import { MapPin, Workflow, Bell, LineChart, Shield, Users2 } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "High-Resolution Heatmaps",
    description: "Street-level pollution visualization across all 28 states and 8 union territories with 10-meter precision.",
    gradient: "from-primary to-primary-light",
  },
  {
    icon: Workflow,
    title: "Federated Architecture",
    description: "Seamless integration between CPCB central system and individual state modules for collaborative governance.",
    gradient: "from-secondary to-secondary-light",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description: "Automated health advisories and compliance notifications based on live pollution data and AI predictions.",
    gradient: "from-accent to-aqi-moderate",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Machine learning models forecast pollution trends and policy impacts to enable proactive decision-making.",
    gradient: "from-primary-light to-secondary",
  },
  {
    icon: Shield,
    title: "Transparent Compliance",
    description: "Digital fenceline monitoring ensures industries maintain emission standards with automated flagging.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Users2,
    title: "Citizen Participation",
    description: "Empower every Indian to report pollution events and access safe route planning through mobile app.",
    gradient: "from-accent to-primary",
  },
];

const FeaturesShowcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transforming Air Quality
            <span className="block text-secondary mt-2">Through Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Advanced features enabling data-driven environmental governance at every level
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group p-8 hover:shadow-elevation transition-all duration-500 border-2 animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* NCAP Integration Highlight */}
        <div className="mt-20 max-w-4xl mx-auto">
          <Card className="p-10 bg-gradient-earth text-white border-0 text-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">NCAP Aligned</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Aligned with National Clean Air Programme
              </h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
                Supporting India's ambitious goal of 20-30% reduction in particulate matter 
                concentration by 2024 through transparent monitoring and collaborative action
              </p>
              <div className="flex justify-center gap-8 pt-6">
                <div>
                  <div className="text-4xl font-bold">132</div>
                  <div className="text-sm text-white/80">Non-Attainment Cities</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">30%</div>
                  <div className="text-sm text-white/80">Reduction Target</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">2024</div>
                  <div className="text-sm text-white/80">Target Year</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
