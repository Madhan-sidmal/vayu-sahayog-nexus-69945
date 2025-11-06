import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, MessageSquare, ThumbsUp, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CommunityWatchFeed = () => {
  const reports = [
    {
      id: "RPT-2547",
      user: "Resident",
      location: "Connaught Place, Delhi",
      type: "Vehicle Emissions",
      description: "Heavy smoke from diesel buses at the metro station",
      time: "2 hours ago",
      status: "Resolved",
      likes: 45,
      comments: 12,
      pincode: "110001"
    },
    {
      id: "RPT-2548",
      user: "Community Member",
      location: "MG Road, Bangalore",
      type: "Construction Dust",
      description: "Ongoing construction without dust control measures",
      time: "5 hours ago",
      status: "In Progress",
      likes: 28,
      comments: 7,
      pincode: "560001"
    },
    {
      id: "RPT-2549",
      user: "Citizen",
      location: "Nehru Place, Delhi",
      type: "Waste Burning",
      description: "Open garbage burning near the market complex",
      time: "1 day ago",
      status: "Pending",
      likes: 67,
      comments: 23,
      pincode: "110019"
    },
    {
      id: "RPT-2550",
      user: "Resident",
      location: "Karol Bagh, Delhi",
      type: "Industrial Smoke",
      description: "Factory releasing thick black smoke continuously",
      time: "2 days ago",
      status: "Resolved",
      likes: 89,
      comments: 34,
      pincode: "110005"
    }
  ];

  const communityStats = {
    totalReports: 1547,
    resolved: 892,
    inProgress: 234,
    activeMembers: 5623
  };

  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
        <CardTitle className="flex items-center gap-2">
          <Users className="w-6 h-6 text-primary" />
          Community Watch Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {/* Community Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-primary">{communityStats.totalReports}</div>
            <div className="text-xs text-muted-foreground">Total Reports</div>
          </div>
          <div className="text-center p-3 bg-green-50 dark:bg-green-950 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{communityStats.resolved}</div>
            <div className="text-xs text-muted-foreground">Resolved</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">{communityStats.inProgress}</div>
            <div className="text-xs text-muted-foreground">In Progress</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-accent">{communityStats.activeMembers}</div>
            <div className="text-xs text-muted-foreground">Active Members</div>
          </div>
        </div>

        <Tabs defaultValue="recent" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="myarea">My Area</TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="space-y-3">
            {reports.map((report) => (
              <div 
                key={report.id}
                className="p-4 border rounded-lg hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm">{report.id}</span>
                      <span className="text-xs text-muted-foreground">by {report.user}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                      <MapPin className="w-3 h-3" />
                      {report.location}
                    </div>
                  </div>
                  <Badge variant={
                    report.status === "Resolved" ? "default" :
                    report.status === "In Progress" ? "secondary" :
                    "outline"
                  }>
                    {report.status}
                  </Badge>
                </div>

                <h5 className="font-medium mb-2">{report.type}</h5>
                <p className="text-sm text-muted-foreground mb-3">{report.description}</p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{report.time}</span>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                      <ThumbsUp className="w-3 h-3" />
                      {report.likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                      <MessageSquare className="w-3 h-3" />
                      {report.comments}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="trending">
            <div className="text-center py-8 text-muted-foreground">
              <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Trending reports from your community</p>
            </div>
          </TabsContent>

          <TabsContent value="myarea">
            <div className="text-center py-8 text-muted-foreground">
              <MapPin className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Reports from your pincode area</p>
            </div>
          </TabsContent>
        </Tabs>

        <Button className="w-full mt-4" variant="outline">
          <Users className="w-4 h-4 mr-2" />
          Join Community Watch
        </Button>
      </CardContent>
    </Card>
  );
};

export default CommunityWatchFeed;
