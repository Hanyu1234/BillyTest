import { StatCard } from "./StatCard";
import { ConsumptionChart } from "./ConsumptionChart";
import { SystemAnnouncements } from "./SystemAnnouncements";
import { CardQuantity } from "./CardQuantity";
import { CheckCircle, X } from "lucide-react";
import { useState } from "react";

export function Dashboard() {
  const [showSuccessToast, setShowSuccessToast] = useState(true);

  const stats = [
    {
      label: "账户余额",
      value: "$ 0",
      color: "pink",
      data: [0.5, 0.8, 0.6, 0.9, 0.7, 1.0, 0.8, 0.6, 0.7, 0.5]
    },
    {
      label: "消费金额",
      value: "$ 0",
      color: "blue",
      data: [0.3, 0.4, 0.6, 0.5, 0.7, 0.8, 0.6, 0.9, 0.7, 0.8]
    },
    {
      label: "拒付数",
      value: "0",
      color: "purple",
      data: [0.4, 0.6, 0.5, 0.8, 0.6, 0.9, 0.7, 0.5, 0.8, 0.7]
    },
    {
      label: "拒付率",
      value: "0%",
      color: "orange",
      data: [0.3, 0.5, 0.4, 0.6, 0.5, 0.7, 0.8, 0.9, 1.0, 0.9]
    }
  ];

  return (
    <div>
      {/* Success Toast */}
      {showSuccessToast && (
        <div className="fixed top-4 right-4 left-4 sm:left-auto sm:top-6 sm:right-6 bg-white shadow-lg rounded-lg p-3 sm:p-4 flex items-center gap-3 z-50 border border-gray-200">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-gray-900">登录成功</span>
          <button
            onClick={() => setShowSuccessToast(false)}
            className="ml-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">账户概览</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-6">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Charts and Announcements */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        <div className="col-span-1 space-y-6">
          <ConsumptionChart />
          <CardQuantity />
        </div>
        <div className="col-span-2">
          <SystemAnnouncements />
        </div>
      </div>
    </div>
  );
}
