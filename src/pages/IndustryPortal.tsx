import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, FileCheck, BarChart3, Settings, ArrowRight, Upload } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveMap from "@/components/InteractiveMap";
import { Badge } from "@/components/ui/badge";

const IndustryPortal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent/20 via-accent/10 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Factory className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">For Registered Industries</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                National Industrial Portal
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Unified compliance management with real-time monitoring and standardized reporting
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
                <h3 className="text-xl font-bold mb-2">Compliance Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  Consolidated view of all facilities and compliance status
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('compliance-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Dashboard <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <Factory className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">Fenceline Monitoring</h3>
                <p className="text-muted-foreground mb-4">
                  Digital monitoring of emissions at facility boundaries
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('facility-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Monitors <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <FileCheck className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Digital Reporting</h3>
                <p className="text-muted-foreground mb-4">
                  Standardized reporting to all SPCBs and CPCB
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('reporting-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Submit Report <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <Settings className="w-12 h-12 text-primary-light mb-4" />
                <h3 className="text-xl font-bold mb-2">Multi-Facility</h3>
                <p className="text-muted-foreground mb-4">
                  Manage multiple facilities from a single interface
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('facility-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Manage Facilities <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Compliance Status */}
        <section id="compliance-section" className="py-16 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4">
            <Card className="p-8 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Compliance Overview</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                  <div className="text-muted-foreground">Facilities Compliant</div>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">12</div>
                  <div className="text-muted-foreground">Pending Reviews</div>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">156</div>
                  <div className="text-muted-foreground">Total Facilities</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Facility Management */}
        <section id="facility-section" className="py-16 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-center">Multi-Facility Dashboard</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "Plant A - Mumbai", aqi: 85, status: "Compliant", alert: false },
                  { name: "Plant B - Pune", aqi: 142, status: "Under Review", alert: true },
                  { name: "Plant C - Chennai", aqi: 68, status: "Compliant", alert: false },
                ].map((facility) => (
                  <Card key={facility.name} className="p-6 hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold">{facility.name}</h3>
                        <div className="text-sm text-muted-foreground mt-1">
                          Fenceline AQI: <span className="font-bold text-foreground">{facility.aqi}</span>
                        </div>
                      </div>
                      {facility.alert && (
                        <Badge variant="destructive">Alert</Badge>
                      )}
                    </div>
                    <div className="mb-4">
                      <div className="text-sm text-muted-foreground mb-2">Status</div>
                      <Badge variant={facility.status === "Compliant" ? "default" : "secondary"}>
                        {facility.status}
                      </Badge>
                    </div>
                    <Button variant="outline" className="w-full" size="sm">
                      View Details
                    </Button>
                  </Card>
                ))}
              </div>

              <InteractiveMap title="Facility Locations & Fenceline Monitoring" height="h-96" />
            </div>
          </div>
        </section>

        {/* Digital Reporting */}
        <section id="reporting-section" className="py-16 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Submit Environmental Report</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Facility</label>
                      <select className="w-full px-4 py-2 rounded-lg border bg-background">
                        <option>Plant A - Mumbai, MH</option>
                        <option>Plant B - Pune, MH</option>
                        <option>Plant C - Chennai, TN</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Report Type</label>
                      <select className="w-full px-4 py-2 rounded-lg border bg-background">
                        <option>Monthly Emissions</option>
                        <option>Quarterly Compliance</option>
                        <option>Annual Environmental</option>
                        <option>Incident Report</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Reporting Period</label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input type="date" className="w-full px-4 py-2 rounded-lg border bg-background" />
                      <input type="date" className="w-full px-4 py-2 rounded-lg border bg-background" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Upload Documents</label>
                    <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                      <p className="text-xs text-muted-foreground mt-1">PDF, DOC, XLS (Max 10MB)</p>
                    </div>
                  </div>

                  <Button className="w-full">
                    <FileCheck className="w-4 h-4 mr-2" />
                    Submit to SPCB
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IndustryPortal;
