import { Search, Filter, Download, CreditCard, Pause, Play, Trash2 } from "lucide-react";
import { useState } from "react";

interface Card {
  id: string;
  cardNumber: string;
  cvv: string;
  expiry: string;
  balance: number;
  status: "active" | "paused" | "expired";
  group: string;
  createdDate: string;
  billingAddress: string;
}

export function CardList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const mockCards: Card[] = [
    {
      id: "1",
      cardNumber: "4532 2560 0012 3456",
      cvv: "123",
      expiry: "12/27",
      balance: 150.00,
      status: "active",
      group: "广告投放",
      createdDate: "2026-03-15",
      billingAddress: "123 Main St, Los Angeles, CA 90001"
    },
    {
      id: "2",
      cardNumber: "4532 2560 0087 9012",
      cvv: "456",
      expiry: "08/26",
      balance: 0,
      status: "paused",
      group: "测试组",
      createdDate: "2026-02-20",
      billingAddress: "456 Oak Ave, New York, NY 10001"
    },
    {
      id: "3",
      cardNumber: "4532 2234 3045 6789",
      cvv: "789",
      expiry: "01/27",
      balance: 500.00,
      status: "active",
      group: "电商购物",
      createdDate: "2026-03-28",
      billingAddress: "789 Pine Rd, Miami, FL 33101"
    },
    {
      id: "4",
      cardNumber: "4532 2560 0023 4567",
      cvv: "234",
      expiry: "03/26",
      balance: 25.50,
      status: "active",
      group: "订阅服务",
      createdDate: "2026-01-10",
      billingAddress: "321 Elm St, Chicago, IL 60601"
    },
  ];

  const filteredCards = mockCards.filter(card => {
    const matchesSearch = card.cardNumber.includes(searchTerm) || card.group.includes(searchTerm);
    const matchesStatus = selectedStatus === "all" || card.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      active: "bg-green-100 text-green-700",
      paused: "bg-yellow-100 text-yellow-700",
      expired: "bg-red-100 text-red-700"
    };
    const labels = {
      active: "在线",
      paused: "暂停",
      expired: "已过期"
    };
    return (
      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">卡片列表</h1>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            申请新卡
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="搜索卡号或分组..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            <option value="all">全部状态</option>
            <option value="active">在线</option>
            <option value="paused">暂停</option>
            <option value="expired">已过期</option>
          </select>
          <button className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" />
            更多筛选
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-sm text-gray-500 mb-1">总卡片数</div>
          <div className="text-2xl font-semibold text-gray-900">{mockCards.length}</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-sm text-gray-500 mb-1">在线卡片</div>
          <div className="text-2xl font-semibold text-green-600">
            {mockCards.filter(c => c.status === "active").length}
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-sm text-gray-500 mb-1">暂停卡片</div>
          <div className="text-2xl font-semibold text-yellow-600">
            {mockCards.filter(c => c.status === "paused").length}
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-sm text-gray-500 mb-1">总余额</div>
          <div className="text-2xl font-semibold text-blue-600">
            ${mockCards.reduce((sum, c) => sum + c.balance, 0).toFixed(2)}
          </div>
        </div>
      </div>

      {/* Cards Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                卡号信息
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                CVV / 有效期
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                余额
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                状态
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                分组
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                创建日期
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                操作
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCards.map((card) => (
              <tr key={card.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <CreditCard className="w-5 h-5 text-blue-500 mr-3" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{card.cardNumber}</div>
                      <div className="text-xs text-gray-500">{card.billingAddress}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{card.cvv}</div>
                  <div className="text-xs text-gray-500">{card.expiry}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">${card.balance.toFixed(2)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(card.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{card.group}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{card.createdDate}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                      {card.status === "active" ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
