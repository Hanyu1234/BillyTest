import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

export function ConsumptionChart() {
  const data = [
    { date: "2025-10-01", value: 0 },
    { date: "2026-01-01", value: 0.2 },
    { date: "2026-04-01", value: 0.15 },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-gray-900">消费情况</h2>
        <span className="text-sm text-gray-500">交易手续费: $0</span>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12, fill: "#666" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#666" }}
              tickLine={false}
              domain={[0, 1]}
              ticks={[0, 0.2, 0.4, 0.6, 0.8, 1]}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
