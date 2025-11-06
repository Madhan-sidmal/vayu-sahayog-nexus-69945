import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, AlertTriangle, FileText, Bell, ArrowRight, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveMap from "@/components/InteractiveMap";
import { ComplianceChart } from "@/components/AQIChart";
import DataTable from "@/components/DataTable";
import IndustrialComplianceMonitor from "@/components/IndustrialComplianceMonitor";

const RegulatorPortal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary/20 via-secondary/10 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <Building2 className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">For SPCBs & Municipalities</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                State & City Regulator Portal
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Localized enforcement with state-wide intelligence and citizen engagement
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <Card className="p-6 hover:shadow-lg transition-all">
                <BarChart3 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Intelligence Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  State-wide AQI trends and pollution source analytics
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Analytics <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <AlertTriangle className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">Compliance Monitor</h3>
                <p className="text-muted-foreground mb-4">
                  Track industrial compliance and violations in real-time
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('compliance-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Compliance <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <FileText className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Citizen Reports</h3>
                <p className="text-muted-foreground mb-4">
                  Triage and manage pollution reports from citizens
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('reports-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Manage Reports <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <Bell className="w-12 h-12 text-primary-light mb-4" />
                <h3 className="text-xl font-bold mb-2">Health Alerts</h3>
                <p className="text-muted-foreground mb-4">
                  Broadcast public health advisories during high AQI events
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('alert-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Send Alert <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* State Statistics */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="p-8 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">State Overview</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">42</div>
                  <div className="text-muted-foreground">Cities Monitored</div>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="text-4xl font-bold text-secondary mb-2">238</div>
                  <div className="text-muted-foreground">Industries Tracked</div>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="text-4xl font-bold text-accent mb-2">1,547</div>
                  <div className="text-muted-foreground">Citizen Reports</div>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="text-4xl font-bold text-green-600 mb-2">89%</div>
                  <div className="text-muted-foreground">Compliance Rate</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* State Map & Analytics */}
        <section id="map-section" className="py-16 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto space-y-8">
              <InteractiveMap title="State-Wide Air Quality Monitoring" height="h-[500px]" />
            </div>
          </div>
        </section>

        {/* Compliance Monitor */}
        <section id="compliance-section" className="py-16 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <IndustrialComplianceMonitor />
            </div>
          </div>
        </section>

        {/* Citizen Reports */}
        <section id="reports-section" className="py-16 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <DataTable title="Citizen Reports - Recent" type="reports" />
            </div>
          </div>
        </section>

        {/* Alert Management */}
        <section id="alert-section" className="py-16 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4">
            <Card className="p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Health Alert Broadcaster</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Alert Type</label>
                  <select className="w-full px-4 py-2 rounded-lg border bg-background">
                    <option>High AQI Warning</option>
                    <option>Industrial Incident</option>
                    <option>Traffic Restriction</option>
                    <option>General Advisory</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Target Areas</label>
                  <select className="w-full px-4 py-2 rounded-lg border bg-background" multiple>
                    <option>All Cities</option>
                    <option>Delhi NCR</option>
                    <option>Mumbai Metropolitan</option>
                    <option>Bangalore Urban</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-2 rounded-lg border bg-background" 
                    rows={4}
                    placeholder="Enter health advisory message..."
                  ></textarea>
                </div>
                <Button className="w-full">
                  <Bell className="w-4 h-4 mr-2" />
                  Broadcast Alert
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RegulatorPortal;
