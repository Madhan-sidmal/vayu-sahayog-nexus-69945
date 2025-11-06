import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Building2, MapPinned } from "lucide-react";

const impacts = [
  {
    icon: Users,
    value: "1.4B+",
    label: "Citizens Empowered",
    description: "Every Indian can now access hyperlocal air quality data and participate in cleaner air initiatives",
    color: "primary",
  },
  {
    icon: Building2,
    value: "100K+",
    label: "Industries Connected",
    description: "Real-time compliance monitoring across all registered industrial facilities nationwide",
    color: "secondary",
  },
  {
    icon: MapPinned,
    value: "4,000+",
    label: "Cities Covered",
    description: "Comprehensive pollution monitoring from metros to tier-3 cities with street-level precision",
    color: "accent",
  },
  {
    icon: TrendingUp,
    value: "30%",
    label: "Reduction Target",
    description: "Supporting NCAP's ambitious goal through transparent, data-driven environmental governance",
    color: "primary-light",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nationwide Impact
            <span className="block text-accent mt-2">One Breath at a Time</span>
          </h2>
          <p className="text-lg text-white/90">
            Transforming India's air quality landscape through unified data and collaborative action
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <Card
                key={impact.label}
                className="p-8 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-white">{impact.value}</div>
                  <div className="text-lg font-semibold text-white/90">{impact.label}</div>
                  <p className="text-sm text-white/70 leading-relaxed">{impact.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Vision Statement */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-10 bg-white/10 backdrop-blur-md border-white/20 text-center">
            <blockquote className="space-y-6">
              <p className="text-2xl md:text-3xl font-semibold text-white leading-relaxed italic">
                "Building a cleaner, healthier India where every citizen, every industry, 
                and every regulator works together with transparent, real-time data to 
                achieve our National Clean Air Programme goals."
              </p>
              <div className="pt-6 border-t border-white/20">
                <div className="font-bold text-lg text-white">Vayu Sahayog Mission</div>
                <div className="text-white/70 text-sm">Central Pollution Control Board Initiative</div>
              </div>
            </blockquote>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
