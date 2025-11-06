import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, MapPinned, Target, ArrowRight, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveMap from "@/components/InteractiveMap";
import { AQITrendChart, ComplianceChart } from "@/components/AQIChart";
import DataTable from "@/components/DataTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PolicySimulator from "@/components/PolicySimulator";
import TransboundaryTracker from "@/components/TransboundaryTracker";

const GovernancePortal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/20 via-primary/10 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">For CPCB & Ministry</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                National Governance Dashboard
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Strategic oversight with inter-state analytics and national policy tools
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <Card className="p-6 hover:shadow-lg transition-all">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Inter-State AQI</h3>
                <p className="text-muted-foreground mb-4">
                  Compare air quality trends across all states and union territories
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('analytics-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Comparison <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <MapPinned className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">Transboundary Tracker</h3>
                <p className="text-muted-foreground mb-4">
                  Monitor pollution flowing across state boundaries
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('policy-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Track Flow <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <Target className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Policy Simulator</h3>
                <p className="text-muted-foreground mb-4">
                  Model impact of national policies before implementation
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('policy-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Run Simulation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <AlertTriangle className="w-12 h-12 text-primary-light mb-4" />
                <h3 className="text-xl font-bold mb-2">Hotspot Identification</h3>
                <p className="text-muted-foreground mb-4">
                  Identify critical pollution zones requiring intervention
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Hotspots <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* National Statistics */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="p-8 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">National Overview</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">36</div>
                  <div className="text-muted-foreground">States & UTs</div>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="text-4xl font-bold text-secondary mb-2">4,000+</div>
                  <div className="text-muted-foreground">Cities Covered</div>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="text-4xl font-bold text-accent mb-2">100K+</div>
                  <div className="text-muted-foreground">Industries</div>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
                  <div className="text-muted-foreground">NCAP Target</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* NCAP Progress */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
                <h2 className="text-3xl font-bold mb-4 text-center">NCAP Progress Tracker</h2>
                <p className="text-center text-muted-foreground mb-8">
                  Monitoring India's journey towards 30% reduction in PM10 and PM2.5 concentrations
                </p>
                <div className="bg-background rounded-lg p-8">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">PM2.5 Reduction</span>
                        <span className="font-bold text-primary">18%</span>
                      </div>
                      <div className="h-4 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">PM10 Reduction</span>
                        <span className="font-bold text-secondary">15%</span>
                      </div>
                      <div className="h-4 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-secondary rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Policy Tools */}
        <section id="policy-section" className="py-16 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">National Policy & Analysis Tools</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <PolicySimulator />
                <TransboundaryTracker />
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Dashboard */}
        <section id="analytics-section" className="py-16 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">National Analytics Dashboard</h2>
              
              <Tabs defaultValue="trends" className="space-y-8">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                  <TabsTrigger value="trends">Trends</TabsTrigger>
                  <TabsTrigger value="compliance">Compliance</TabsTrigger>
                  <TabsTrigger value="states">States</TabsTrigger>
                </TabsList>

                <TabsContent value="trends" className="space-y-6">
                  <AQITrendChart />
                  <DataTable title="City Rankings" type="cities" />
                </TabsContent>

                <TabsContent value="compliance" className="space-y-6">
                  <ComplianceChart />
                  <DataTable title="Industrial Overview" type="industries" />
                </TabsContent>

                <TabsContent value="states" className="space-y-6">
                  <DataTable title="State Performance" type="states" />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* National Map */}
        <section id="map-section" className="py-16 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <InteractiveMap 
                title="National Pollution Heatmap" 
                height="h-[600px]"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GovernancePortal;
