import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function CardQuantity() {
  const data = [
    { name: "在线卡片", value: 0 },
    { name: "暂停卡片卡数", value: 0 }
  ];

  const COLORS = ["#3b82f6", "#e5e7eb"];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-gray-900">卡片数量</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700">申请添加</button>
      </div>
      <div className="h-48 flex items-center justify-center">
        <div className="relative w-40 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={0}
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="space-y-2 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange-400"></div>
          <span className="text-sm text-gray-600">在线卡片</span>
          <span className="ml-auto text-sm font-medium text-gray-900">0</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-sm text-gray-600">暂停卡片卡数</span>
          <span className="ml-auto text-sm font-medium text-gray-900">0</span>
        </div>
      </div>
    </div>
  );
}
