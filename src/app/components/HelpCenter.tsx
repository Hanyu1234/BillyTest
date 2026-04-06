import { Search, ChevronDown, Book, MessageSquare, FileText, Shield } from "lucide-react";
import { useState } from "react";

export function HelpCenter() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const categories = [
    { key: "all", label: "全部问题", icon: Book },
    { key: "account", label: "账户相关", icon: Shield },
    { key: "cards", label: "卡片使用", icon: FileText },
    { key: "payment", label: "充值提现", icon: MessageSquare },
  ];

  const faqs = [
    {
      id: "faq1",
      category: "account",
      question: "如何注册账户？",
      answer: "您可以通过点击注册按钮，填写必要的个人信息（邮箱、密码等）来完成注册。注册后需要进行邮箱验证才能正常使用平台功能。"
    },
    {
      id: "faq2",
      category: "cards",
      question: "开卡需要多长时间？",
      answer: "正常情况下，提交开卡申请后，系统会在1-5分钟内自动审核并开卡。如遇特殊情况，可能需要人工审核，时间会稍长一些。请耐心等待或联系客服。"
    },
    {
      id: "faq3",
      category: "cards",
      question: "为什么我的卡片被暂停了？",
      answer: "卡片暂停可能有以下几个原因：1) 拒付率或退款率超过限制；2) 卡片余额不足；3) 触发风控规则；4) 用户主动暂停。如需恢复，请联系客服了解具体原因。"
    },
    {
      id: "faq4",
      category: "payment",
      question: "支持哪些充值方式？",
      answer: "我们支持多种充值方式：1) 在线支付（信用卡、借记卡）；2) 加密货币充值（USDT）；3) 人工充值（联系客服）。充值到账时间根据不同方式有所不同，最快可即时到账。"
    },
    {
      id: "faq5",
      category: "payment",
      question: "提现需要多久到账？",
      answer: "提现申请提交后，通常在1-3个工作日内处理。到账时间取决于您选择的提现方式和银行处理速度。首次提现可能需要额外的身份验证。"
    },
    {
      id: "faq6",
      category: "cards",
      question: "卡片可以在哪些平台使用？",
      answer: "我们的虚拟卡支持绝大多数国际在线平台，包括：Google Ads、Facebook Ads、Amazon、Shopify、PayPal等。但请注意避免在禁止使用的国家和地区使用卡片。"
    },
    {
      id: "faq7",
      category: "account",
      question: "如何保护账户安全？",
      answer: "建议您采取以下措施保护账户安全：1) 设置强密码并定期更换；2) 启用两步验证；3) 不要与他人共享账户信息；4) 定期检查账户活动记录；5) 在公共网络环境下谨慎操作。"
    },
    {
      id: "faq8",
      category: "cards",
      question: "交易被拒付了怎么办？",
      answer: "如果交易被拒付，请首先联系商户了解原因。常见原因包括：卡片信息错误、余额不足、商户拒绝等。如果确认是误判，请及时联系我们的客服团队协助处理。"
    },
  ];

  const filteredFaqs = activeCategory === "all"
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">帮助中心</h1>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-6 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">您需要什么帮助？</h2>
        <div className="max-w-2xl mx-auto relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="搜索问题关键词..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <MessageSquare className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-medium text-gray-900 mb-1">在线客服</h3>
          <p className="text-sm text-gray-500">7x24小时在线支持</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-medium text-gray-900 mb-1">使用文档</h3>
          <p className="text-sm text-gray-500">详细的操作指南</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Book className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-medium text-gray-900 mb-1">API文档</h3>
          <p className="text-sm text-gray-500">开发者接入指南</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="font-medium text-gray-900 mb-1">安全中心</h3>
          <p className="text-sm text-gray-500">账户安全设置</p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex gap-4 border-b border-gray-200 mb-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`flex items-center gap-2 pb-3 px-1 relative ${
                  activeCategory === category.key
                    ? "text-blue-600 font-medium"
                    : "text-gray-600"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
                {activeCategory === category.key && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                )}
              </button>
            );
          })}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
              >
                <span className="text-left font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedFaq === faq.id ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {expandedFaq === faq.id && (
                <div className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 mt-6 text-white text-center">
        <h3 className="text-xl font-semibold mb-2">还有其他问题？</h3>
        <p className="text-blue-100 mb-6">我们的客服团队随时为您提供帮助</p>
        <div className="flex items-center justify-center gap-4">
          <button className="px-6 py-2.5 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
            联系在线客服
          </button>
          <button className="px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-colors font-medium">
            提交工单
          </button>
        </div>
      </div>
    </div>
  );
}
