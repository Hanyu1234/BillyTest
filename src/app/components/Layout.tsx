import { Outlet, Link, useLocation } from "react-router";
import { Home, CreditCard, List, FileText, Sparkles, HelpCircle, MessageCircle, User } from "lucide-react";

export function Layout() {
  const location = useLocation();

  const menuItems = [
    {
      category: "账户概览",
      icon: Home,
      path: "/",
      items: []
    },
    {
      category: "我的卡片",
      items: [
        { name: "申请卡片", icon: CreditCard, path: "/apply" },
        { name: "卡片列表", icon: List, path: "/cards" },
        { name: "交易明细", icon: FileText, path: "/transactions" },
      ]
    },
    {
      category: "账户管理",
      items: [
        { name: "资金活动", icon: Sparkles, path: "/funds" },
        { name: "帮助中心", icon: HelpCircle, path: "/help" },
        { name: "个人设置", icon: User, path: "/profile" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm">
        Card Usage Guidelines: • Chargeback rate must be kept below 20% • Refund rate must remain under 10% • Usage is strictly prohibited in countries such as China, Russia, and Myanmar • For corporate clients with high card usage, please contact your account manager for potential discounts
      </header>

      <div className="flex lg:flex-row">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-white min-h-screen shadow-sm">
          {/* Logo */}
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-500">VCC</div>
          </div>

          {/* Navigation */}
          <nav className="px-3">
            {menuItems.map((section, idx) => (
              <div key={idx} className="mb-6">
                {section.category && !section.items.length && (
                  <Link
                    to={section.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      location.pathname === section.path
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <section.icon className="w-5 h-5" />
                    <span>{section.category}</span>
                  </Link>
                )}

                {section.category && section.items.length > 0 && (
                  <>
                    <div className="px-3 py-2 text-sm font-semibold text-gray-900">
                      {section.category}
                    </div>
                    <div className="space-y-1">
                      {section.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          to={item.path}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                            location.pathname === item.path
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          <item.icon className="w-4 h-4" />
                          <span className="text-sm">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Mobile quick navigation */}
          <nav className="mb-4 lg:hidden">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {menuItems.flatMap((section) =>
                section.items.length
                  ? section.items
                  : [{ name: section.category, icon: section.icon, path: section.path }],
              ).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                    location.pathname === item.path
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 border border-gray-200"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>
          <Outlet />
        </main>
      </div>

      {/* Customer Service Button */}
      <button className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 bg-blue-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline text-sm">在线客服👋</span>
      </button>
    </div>
  );
}