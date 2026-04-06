import { AreaChart, Area, ResponsiveContainer } from "recharts";

interface StatCardProps {
  label: string;
  value: string;
  color: string;
  data: number[];
}

export function StatCard({ label, value, color }: StatCardProps) {
  const colorMap: Record<string, string> = {
    pink: "#ec4899",
    blue: "#3b82f6",
    purple: "#a855f7",
    orange: "#f97316"
  };

  const chartData = Array.from({ length: 10 }, (_, i) => ({
    value: Math.random() * 0.5 + 0.3
  }));

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: colorMap[color] }}
          />
          <span className="text-sm text-gray-500">{label}</span>
        </div>
      </div>
      <div className="text-3xl font-semibold text-gray-900 mb-4">{value}</div>
      <div className="h-16 -mx-6 -mb-6">
        <ResponsiveContainer width="100%" height={64}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={colorMap[color]} stopOpacity={0.3} />
                <stop offset="100%" stopColor={colorMap[color]} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke={colorMap[color]}
              strokeWidth={2}
              fill={`url(#gradient-${color})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}