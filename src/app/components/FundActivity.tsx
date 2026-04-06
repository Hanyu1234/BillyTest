import { Plus, ArrowDownCircle, ArrowUpCircle, DollarSign, Clock } from "lucide-react";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

interface Activity {
  id: string;
  type: "deposit" | "withdrawal" | "fee" | "refund";
  amount: number;
  status: "completed" | "pending" | "failed";
  description: string;
  date: string;
  time: string;
  balance: number;
}

export function FundActivity() {
  const [activeTab, setActiveTab] = useState("all");

  const mockActivities: Activity[] = [
    {
      id: "FA20260405001",
      type: "deposit",
      amount: 500.00,
      status: "completed",
      description: "在线充值",
      date: "2026-04-05",
      time: "10:30:15",
      balance: 1250.00
    },
    {
      id: "FA20260404002",
      type: "fee",
      amount: 3.00,
      status: "completed",
      description: "开卡费用 - 卡号 4532****3456",
      date: "2026-04-04",
      time: "14:22:40",
      balance: 750.00
    },
    {
      id: "FA20260403003",
      type: "withdrawal",
      amount: 200.00,
      status: "pending",
      description: "提现至银行账户",
      date: "2026-04-03",
      time: "16:45:30",
      balance: 753.00
    },
    {
      id: "FA20260402004",
      type: "deposit",
      amount: 1000.00,
      status: "completed",
      description: "人工充值",
      date: "2026-04-02",
      time: "09:15:20",
      balance: 953.00
    },
    {
      id: "FA20260401005",
      type: "refund",
      amount: 29.99,
      status: "completed",
      description: "交易退款 - TXN20260401",
      date: "2026-04-01",
      time: "11:20:18",
      balance: -47.00
    },
    {
      id: "FA20260331006",
      type: "fee",
      amount: 0.60,
      status: "completed",
      description: "交易手续费",
      date: "2026-03-31",
      time: "15:50:45",
      balance: -76.99
    },
  ];

  const balanceData = [
    { date: "03-25", balance: -200 },
    { date: "03-28", balance: -100 },
    { date: "04-01", balance: -77 },
    { date: "04-02", balance: 953 },
    { date: "04-03", balance: 953 },
    { date: "04-04", balance: 750 },
    { date: "04-05", balance: 1250 },
  ];

  const filteredActivities = activeTab === "all" 
    ? mockActivities 
    : mockActivities.filter(a => a.type === activeTab);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "deposit":
        return <ArrowDownCircle className="w-5 h-5 text-green-600" />;
      case "withdrawal":
        return <ArrowUpCircle className="w-5 h-5 text-orange-600" />;
      case "fee":
        return <DollarSign className="w-5 h-5 text-red-600" />;
      case "refund":
        return <Plus className="w-5 h-5 text-blue-600" />;
      default:
        return <DollarSign className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      completed: "bg-green-100 text-green-700",
      pending: "bg-yellow-100 text-yellow-700",
      failed: "bg-red-100 text-red-700"
    };
    const labels = {
      completed: "已完成",
      pending: "处理中",
      failed: "失败"
    };
    return (
      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  const totalDeposit = mockActivities
    .filter(a => a.type === "deposit" && a.status === "completed")
    .reduce((sum, a) => sum + a.amount, 0);

  const totalWithdrawal = mockActivities
    .filter(a => a.type === "withdrawal" && a.status === "completed")
    .reduce((sum, a) => sum + a.amount, 0);

  const totalFees = mockActivities
    .filter(a => a.type === "fee" && a.status === "completed")
    .reduce((sum, a) => sum + a.amount, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">资金活动</h1>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            提现
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            充值
          </button>
        </div>
      </div>

      {/* Balance Chart */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-1">账户余额趋势</h2>
            <div className="text-3xl font-bold text-blue-600">$1,250.00</div>
          </div>
          <div className="flex gap-6">
            <div>
              <div className="text-sm text-gray-500">本月充值</div>
              <div className="text-lg font-semibold text-green-600">+$1,500.00</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">本月支出</div>
              <div className="text-lg font-semibold text-red-600">-$250.00</div>
            </div>
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={balanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fill: "#666" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#666" }}
                tickLine={false}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: "#3b82f6", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-sm text-gray-500 mb-1">总充值</div>
          <div className="text-2xl font-semibold text-green-600">${totalDeposit.toFixed(2)}</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-sm text-gray-500 mb-1">总提现</div>
          <div className="text-2xl font-semibold text-orange-600">${totalWithdrawal.toFixed(2)}</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-sm text-gray-500 mb-1">总手续费</div>
          <div className="text-2xl font-semibold text-red-600">${totalFees.toFixed(2)}</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-sm text-gray-500 mb-1">待处理</div>
          <div className="text-2xl font-semibold text-yellow-600">
            {mockActivities.filter(a => a.status === "pending").length}
          </div>
        </div>
      </div>

      {/* Activity Filter Tabs */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex gap-4 border-b border-gray-200 mb-6">
          {[
            { key: "all", label: "全部" },
            { key: "deposit", label: "充值" },
            { key: "withdrawal", label: "提现" },
            { key: "fee", label: "手续费" },
            { key: "refund", label: "退款" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-3 px-1 relative ${
                activeTab === tab.key
                  ? "text-blue-600 font-medium"
                  : "text-gray-600"
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              )}
            </button>
          ))}
        </div>

        {/* Activities List */}
        <div className="space-y-4">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  {getActivityIcon(activity.type)}
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{activity.description}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {activity.date} {activity.time} • ID: {activity.id}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className={`text-lg font-semibold ${
                    activity.type === "deposit" || activity.type === "refund"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}>
                    {activity.type === "deposit" || activity.type === "refund" ? "+" : "-"}
                    ${activity.amount.toFixed(2)}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    余额: ${activity.balance.toFixed(2)}
                  </div>
                </div>
                <div className="w-24">
                  {getStatusBadge(activity.status)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
