import { Search, Filter, Download, Calendar, TrendingUp, TrendingDown } from "lucide-react";
import { useState } from "react";

interface Transaction {
  id: string;
  cardNumber: string;
  merchant: string;
  amount: number;
  type: "charge" | "refund" | "chargeback";
  status: "success" | "pending" | "failed";
  date: string;
  time: string;
  currency: string;
  fee: number;
}

export function TransactionDetails() {
  const [dateRange, setDateRange] = useState("7days");
  const [selectedType, setSelectedType] = useState("all");

  const mockTransactions: Transaction[] = [
    {
      id: "TXN20260405001",
      cardNumber: "4532 **** **** 3456",
      merchant: "Google Ads",
      amount: 250.00,
      type: "charge",
      status: "success",
      date: "2026-04-05",
      time: "14:32:15",
      currency: "USD",
      fee: 0.20
    },
    {
      id: "TXN20260404002",
      cardNumber: "4532 **** **** 9012",
      merchant: "Facebook Ads",
      amount: 180.50,
      type: "charge",
      status: "success",
      date: "2026-04-04",
      time: "09:15:42",
      currency: "USD",
      fee: 0.20
    },
    {
      id: "TXN20260403003",
      cardNumber: "4532 **** **** 6789",
      merchant: "Amazon Web Services",
      amount: 89.99,
      type: "charge",
      status: "success",
      date: "2026-04-03",
      time: "16:45:30",
      currency: "USD",
      fee: 0.20
    },
    {
      id: "TXN20260403004",
      cardNumber: "4532 **** **** 3456",
      merchant: "Shopify",
      amount: 29.99,
      type: "refund",
      status: "success",
      date: "2026-04-03",
      time: "11:20:18",
      currency: "USD",
      fee: 0.00
    },
    {
      id: "TXN20260402005",
      cardNumber: "4532 **** **** 4567",
      merchant: "PayPal",
      amount: 450.00,
      type: "chargeback",
      status: "pending",
      date: "2026-04-02",
      time: "13:55:09",
      currency: "USD",
      fee: 0.00
    },
    {
      id: "TXN20260401006",
      cardNumber: "4532 **** **** 9012",
      merchant: "Microsoft Azure",
      amount: 320.00,
      type: "charge",
      status: "success",
      date: "2026-04-01",
      time: "08:30:45",
      currency: "USD",
      fee: 0.20
    },
  ];

  const filteredTransactions = mockTransactions.filter(txn => {
    if (selectedType === "all") return true;
    return txn.type === selectedType;
  });

  const getTypeIcon = (type: string) => {
    if (type === "refund" || type === "chargeback") {
      return <TrendingUp className="w-4 h-4 text-green-600" />;
    }
    return <TrendingDown className="w-4 h-4 text-red-600" />;
  };

  const getTypeBadge = (type: string) => {
    const styles = {
      charge: "bg-blue-100 text-blue-700",
      refund: "bg-green-100 text-green-700",
      chargeback: "bg-orange-100 text-orange-700"
    };
    const labels = {
      charge: "消费",
      refund: "退款",
      chargeback: "拒付"
    };
    return (
      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${styles[type as keyof typeof styles]}`}>
        {labels[type as keyof typeof labels]}
      </span>
    );
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      success: "bg-green-100 text-green-700",
      pending: "bg-yellow-100 text-yellow-700",
      failed: "bg-red-100 text-red-700"
    };
    const labels = {
      success: "成功",
      pending: "处理中",
      failed: "失败"
    };
    return (
      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  const totalCharge = mockTransactions
    .filter(t => t.type === "charge" && t.status === "success")
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalRefund = mockTransactions
    .filter(t => t.type === "refund" && t.status === "success")
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalFees = mockTransactions
    .filter(t => t.status === "success")
    .reduce((sum, t) => sum + t.fee, 0);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">交易明细</h1>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            导出报表
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-sm text-gray-500 mb-1">总交易数</div>
          <div className="text-2xl font-semibold text-gray-900">{mockTransactions.length}</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-sm text-gray-500 mb-1">总消费金额</div>
          <div className="text-2xl font-semibold text-red-600">${totalCharge.toFixed(2)}</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-sm text-gray-500 mb-1">总退款金额</div>
          <div className="text-2xl font-semibold text-green-600">${totalRefund.toFixed(2)}</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-sm text-gray-500 mb-1">总手续费</div>
          <div className="text-2xl font-semibold text-orange-600">${totalFees.toFixed(2)}</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="搜索交易ID、商户名称或卡号..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="w-full lg:w-auto px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            <option value="today">今天</option>
            <option value="7days">最近7天</option>
            <option value="30days">最近30天</option>
            <option value="custom">自定义日期</option>
          </select>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full lg:w-auto px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            <option value="all">全部类型</option>
            <option value="charge">消费</option>
            <option value="refund">退款</option>
            <option value="chargeback">拒付</option>
          </select>
          <button className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" />
            更多筛选
          </button>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                交易ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                卡号
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                商户
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                金额
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                类型
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                状态
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                手续费
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                交易时间
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTransactions.map((txn) => (
              <tr key={txn.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-blue-600">{txn.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{txn.cardNumber}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{txn.merchant}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(txn.type)}
                    <span className={`text-sm font-medium ${txn.type === "charge" ? "text-red-600" : "text-green-600"}`}>
                      {txn.type === "charge" ? "-" : "+"} ${txn.amount.toFixed(2)}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getTypeBadge(txn.type)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(txn.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${txn.fee.toFixed(2)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{txn.date}</div>
                  <div className="text-xs text-gray-500">{txn.time}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
