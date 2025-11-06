import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Download } from "lucide-react";

interface DataTableProps {
  title?: string;
  type: 'cities' | 'industries' | 'reports' | 'states';
}

const citiesData = [
  { city: "Delhi", state: "DL", aqi: 178, status: "Moderate", population: "32M" },
  { city: "Mumbai", state: "MH", aqi: 95, status: "Satisfactory", population: "21M" },
  { city: "Bangalore", state: "KA", aqi: 68, status: "Satisfactory", population: "13M" },
  { city: "Kolkata", state: "WB", aqi: 142, status: "Moderate", population: "15M" },
  { city: "Chennai", state: "TN", aqi: 82, status: "Satisfactory", population: "11M" },
  { city: "Hyderabad", state: "TS", aqi: 91, status: "Satisfactory", population: "10M" },
];

const industriesData = [
  { name: "ABC Manufacturing Ltd", location: "Gurgaon, HR", type: "Cement", compliance: "Compliant", lastReport: "2024-01-10" },
  { name: "XYZ Steel Industries", location: "Pune, MH", type: "Steel", compliance: "Pending", lastReport: "2023-12-25" },
  { name: "Green Power Plant", location: "Chennai, TN", type: "Power", compliance: "Compliant", lastReport: "2024-01-08" },
  { name: "Delta Chemicals", location: "Mumbai, MH", type: "Chemical", compliance: "Violation", lastReport: "2023-11-15" },
];

const reportsData = [
  { id: "RPT-2024-001", location: "Connaught Place, Delhi", type: "Vehicle Emissions", status: "Resolved", date: "2024-01-12" },
  { id: "RPT-2024-002", location: "MG Road, Bangalore", type: "Construction Dust", status: "In Progress", date: "2024-01-11" },
  { id: "RPT-2024-003", location: "Marine Drive, Mumbai", type: "Waste Burning", status: "Pending", date: "2024-01-10" },
  { id: "RPT-2024-004", location: "Park Street, Kolkata", type: "Industrial Emissions", status: "In Progress", date: "2024-01-09" },
];

const statesData = [
  { state: "Maharashtra", cities: 42, industries: 238, avgAQI: 92, compliance: "89%" },
  { state: "Delhi", cities: 11, industries: 156, avgAQI: 165, compliance: "72%" },
  { state: "Karnataka", cities: 35, industries: 189, avgAQI: 78, compliance: "88%" },
  { state: "Tamil Nadu", cities: 38, industries: 205, avgAQI: 85, compliance: "82%" },
  { state: "West Bengal", cities: 29, industries: 178, avgAQI: 138, compliance: "75%" },
];

const DataTable = ({ title, type }: DataTableProps) => {
  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive"> = {
      "Compliant": "default",
      "Satisfactory": "default",
      "Resolved": "default",
      "Pending": "secondary",
      "In Progress": "secondary",
      "Moderate": "secondary",
      "Violation": "destructive",
    };
    return <Badge variant={variants[status] || "secondary"}>{status}</Badge>;
  };

  const getAQIColor = (aqi: number) => {
    if (aqi < 50) return "text-aqi-good";
    if (aqi < 100) return "text-aqi-moderate";
    if (aqi < 150) return "text-aqi-poor";
    if (aqi < 200) return "text-aqi-unhealthy";
    return "text-aqi-severe";
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        {title && <h3 className="text-2xl font-bold">{title}</h3>}
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      <div className="rounded-md border overflow-x-auto">
        <Table>
          {type === 'cities' && (
            <>
              <TableHeader>
                <TableRow>
                  <TableHead>City</TableHead>
                  <TableHead>State</TableHead>
                  <TableHead>Current AQI</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Population</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {citiesData.map((row) => (
                  <TableRow key={row.city}>
                    <TableCell className="font-medium">{row.city}</TableCell>
                    <TableCell>{row.state}</TableCell>
                    <TableCell className={`font-bold ${getAQIColor(row.aqi)}`}>{row.aqi}</TableCell>
                    <TableCell>{getStatusBadge(row.status)}</TableCell>
                    <TableCell>{row.population}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </>
          )}

          {type === 'industries' && (
            <>
              <TableHeader>
                <TableRow>
                  <TableHead>Industry Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Compliance</TableHead>
                  <TableHead>Last Report</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {industriesData.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell className="font-medium">{row.name}</TableCell>
                    <TableCell>{row.location}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{getStatusBadge(row.compliance)}</TableCell>
                    <TableCell>{row.lastReport}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </>
          )}

          {type === 'reports' && (
            <>
              <TableHeader>
                <TableRow>
                  <TableHead>Report ID</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reportsData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium">{row.id}</TableCell>
                    <TableCell>{row.location}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{getStatusBadge(row.status)}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </>
          )}

          {type === 'states' && (
            <>
              <TableHeader>
                <TableRow>
                  <TableHead>State</TableHead>
                  <TableHead>Cities</TableHead>
                  <TableHead>Industries</TableHead>
                  <TableHead>Avg AQI</TableHead>
                  <TableHead>Compliance</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {statesData.map((row) => (
                  <TableRow key={row.state}>
                    <TableCell className="font-medium">{row.state}</TableCell>
                    <TableCell>{row.cities}</TableCell>
                    <TableCell>{row.industries}</TableCell>
                    <TableCell className={`font-bold ${getAQIColor(row.avgAQI)}`}>{row.avgAQI}</TableCell>
                    <TableCell>{row.compliance}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </>
          )}
        </Table>
      </div>
    </Card>
  );
};

export default DataTable;
