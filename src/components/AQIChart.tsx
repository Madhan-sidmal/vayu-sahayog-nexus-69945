import { Card } from "@/components/ui/card";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { month: 'Jan', delhi: 178, mumbai: 95, bangalore: 68, kolkata: 142, chennai: 82 },
  { month: 'Feb', delhi: 165, mumbai: 88, bangalore: 72, kolkata: 135, chennai: 78 },
  { month: 'Mar', delhi: 152, mumbai: 92, bangalore: 75, kolkata: 128, chennai: 85 },
  { month: 'Apr', delhi: 145, mumbai: 98, bangalore: 68, kolkata: 138, chennai: 88 },
  { month: 'May', delhi: 158, mumbai: 105, bangalore: 82, kolkata: 145, chennai: 95 },
  { month: 'Jun', delhi: 142, mumbai: 92, bangalore: 78, kolkata: 132, chennai: 86 },
];

const complianceData = [
  { state: 'MH', compliant: 85, pending: 12, violations: 3 },
  { state: 'DL', compliant: 72, pending: 18, violations: 10 },
  { state: 'KA', compliant: 88, pending: 8, violations: 4 },
  { state: 'TN', compliant: 82, pending: 14, violations: 4 },
  { state: 'WB', compliant: 75, pending: 20, violations: 5 },
];

interface AQIChartProps {
  type?: 'line' | 'area' | 'bar';
  title?: string;
  data?: any[];
  height?: number;
}

export const AQITrendChart = ({ title = "AQI Trends - Major Cities", height = 300 }: Omit<AQIChartProps, 'type' | 'data'>) => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="month" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="delhi" stroke="hsl(var(--primary))" strokeWidth={2} name="Delhi" />
          <Line type="monotone" dataKey="mumbai" stroke="hsl(var(--secondary))" strokeWidth={2} name="Mumbai" />
          <Line type="monotone" dataKey="bangalore" stroke="hsl(var(--accent))" strokeWidth={2} name="Bangalore" />
          <Line type="monotone" dataKey="kolkata" stroke="hsl(var(--aqi-unhealthy))" strokeWidth={2} name="Kolkata" />
          <Line type="monotone" dataKey="chennai" stroke="hsl(var(--aqi-moderate))" strokeWidth={2} name="Chennai" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export const ComplianceChart = ({ title = "State-wise Industrial Compliance", height = 300 }: Omit<AQIChartProps, 'type' | 'data'>) => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={complianceData}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="state" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }}
          />
          <Legend />
          <Bar dataKey="compliant" fill="hsl(var(--aqi-good))" name="Compliant" />
          <Bar dataKey="pending" fill="hsl(var(--aqi-moderate))" name="Pending" />
          <Bar dataKey="violations" fill="hsl(var(--aqi-unhealthy))" name="Violations" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export const AreaTrendChart = ({ title = "National AQI Overview", height = 300 }: Omit<AQIChartProps, 'type' | 'data'>) => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={monthlyData}>
          <defs>
            <linearGradient id="colorDelhi" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="month" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }}
          />
          <Area type="monotone" dataKey="delhi" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorDelhi)" />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};
