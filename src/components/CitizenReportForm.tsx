import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CitizenReportForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    type: "",
    location: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Report Submitted",
      description: "Your pollution report has been sent to the local SPCB for review.",
    });
    setFormData({ type: "", location: "", description: "" });
  };

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-6">Report Pollution</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="type">Pollution Type</Label>
          <Select 
            value={formData.type} 
            onValueChange={(value) => setFormData({ ...formData, type: value })}
          >
            <SelectTrigger id="type">
              <SelectValue placeholder="Select pollution type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="air">Air Pollution</SelectItem>
              <SelectItem value="dust">Construction Dust</SelectItem>
              <SelectItem value="vehicle">Vehicle Emissions</SelectItem>
              <SelectItem value="burning">Waste Burning</SelectItem>
              <SelectItem value="industrial">Industrial Emissions</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <div className="flex gap-2">
            <Input
              id="location"
              placeholder="Enter location or use current location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
            <Button type="button" variant="outline" size="icon">
              <MapPin className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Describe the pollution issue..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
          />
        </div>

        <div>
          <Label>Photo Evidence</Label>
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
            <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Click to upload photo</p>
          </div>
        </div>

        <Button type="submit" className="w-full">
          <Send className="w-4 h-4 mr-2" />
          Submit Report
        </Button>
      </form>
    </Card>
  );
};

export default CitizenReportForm;
