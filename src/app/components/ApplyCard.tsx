import { Settings, Copy, User } from "lucide-react";
import { useState } from "react";

export function ApplyCard() {
  const [activeTab, setActiveTab] = useState("single");
  const [selectedCard, setSelectedCard] = useState("256000");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    billingAddress: "",
    city: "",
    state: "",
    zip: "",
    rechargeAmount: "10",
    groupNote: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const cardOptions = [
    { value: "256000", label: "256000" },
    { value: "223430", label: "223430" }
  ];

  const calculateTotal = () => {
    const recharge = parseFloat(formData.rechargeAmount) || 0;
    const cardFee = 3.00;
    const serviceFee = recharge * 0.03;
    const total = cardFee + recharge + serviceFee;
    return { cardFee, recharge, serviceFee, total };
  };

  const costs = calculateTotal();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">立即申请</h1>
        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Copy className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        {/* Tabs */}
        <div className="flex gap-8 border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab("single")}
            className={`pb-3 px-1 relative ${
              activeTab === "single"
                ? "text-blue-600 font-medium"
                : "text-gray-600"
            }`}
          >
            单张开卡
            {activeTab === "single" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("batch")}
            className={`pb-3 px-1 ${
              activeTab === "batch" ? "text-blue-600 font-medium" : "text-gray-600"
            }`}
          >
            批量开卡
          </button>
          <button
            onClick={() => setActiveTab("excel")}
            className={`pb-3 px-1 ${
              activeTab === "excel" ? "text-blue-600 font-medium" : "text-gray-600"
            }`}
          >
            Excel开卡
          </button>
        </div>

        {/* Card Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            选择卡段
          </label>
          <div className="flex gap-4">
            {cardOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedCard(option.value)}
                className={`px-6 py-2.5 rounded-lg border-2 transition-colors ${
                  selectedCard === option.value
                    ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                    : "border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <p className="mt-3 text-sm text-gray-500">
            您的账户：开卡费：$3;充值服务费：$3%;交易手续费：$0.2/笔; 欢迎使用
          </p>
        </div>

        {/* Billing Address Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-gray-900">填写卡片地址</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700">
              使用编辑地址
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="text-red-500">* </span>First name
              </label>
              <input
                type="text"
                placeholder="请输入First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="text-red-500">* </span>Last Name
              </label>
              <input
                type="text"
                placeholder="请输入Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="text-red-500">* </span>Billing Address
              </label>
              <input
                type="text"
                placeholder="请输入Billing Address"
                value={formData.billingAddress}
                onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="text-red-500">* </span>City
              </label>
              <input
                type="text"
                placeholder="请输入City"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="text-red-500">* </span>State
              </label>
              <select
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="">请选择State</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
                <option value="FL">Florida</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="text-red-500">* </span>Zip
              </label>
              <input
                type="text"
                placeholder="请输入Zip"
                value={formData.zip}
                onChange={(e) => handleInputChange("zip", e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="text-red-500">* </span>充值金额
              </label>
              <input
                type="number"
                value={formData.rechargeAmount}
                onChange={(e) => handleInputChange("rechargeAmount", e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                分组/备注
              </label>
              <input
                type="text"
                placeholder="请输入分组/备注"
                value={formData.groupNote}
                onChange={(e) => handleInputChange("groupNote", e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Cost Summary and Submit */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            费用预估：开卡费: ${costs.cardFee.toFixed(2)} + 充值: ${costs.recharge.toFixed(2)} + 服务费: ${costs.serviceFee.toFixed(2)} = ${costs.total.toFixed(2)}
          </div>
          <button className="px-8 py-2.5 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed">
            联系客户经理或在线客服开通
          </button>
        </div>
      </div>
    </div>
  );
}
