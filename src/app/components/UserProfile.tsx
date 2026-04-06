import { User, Mail, Phone, MapPin, Shield, Bell, Key, Globe, Camera, Save } from "lucide-react";
import { useState } from "react";

export function UserProfile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profileData, setProfileData] = useState({
    username: "user_123456",
    email: "user@example.com",
    phone: "+1 234 567 8900",
    company: "Example Corp",
    address: "123 Main Street, Los Angeles, CA 90001",
    country: "United States"
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    emailNotifications: true,
    smsNotifications: false,
    loginAlerts: true
  });

  const tabs = [
    { key: "profile", label: "个人信息", icon: User },
    { key: "security", label: "安全设置", icon: Shield },
    { key: "notifications", label: "通知设置", icon: Bell },
    { key: "api", label: "API密钥", icon: Key },
  ];

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSecurityToggle = (field: string) => {
    setSecuritySettings(prev => ({
      ...prev,
      [field]: !prev[field as keyof typeof prev]
    }));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">个人设置</h1>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {/* Avatar */}
            <div className="text-center mb-6">
              <div className="relative inline-block">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  U
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100 hover:bg-gray-50 transition-colors">
                  <Camera className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="mt-4">
                <div className="font-semibold text-gray-900">{profileData.username}</div>
                <div className="text-sm text-gray-500 mt-1">用户ID: 123456</div>
              </div>
            </div>

            {/* Tabs */}
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.key
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {activeTab === "profile" && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">个人信息</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        用户名
                      </label>
                      <input
                        type="text"
                        value={profileData.username}
                        onChange={(e) => handleInputChange("username", e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        邮箱地址
                      </label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        手机号码
                      </label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        公司名称
                      </label>
                      <input
                        type="text"
                        value={profileData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      地址
                    </label>
                    <input
                      type="text"
                      value={profileData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Globe className="w-4 h-4 inline mr-2" />
                      国家/地区
                    </label>
                    <select
                      value={profileData.country}
                      onChange={(e) => handleInputChange("country", e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                      <Save className="w-4 h-4" />
                      保存更改
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">安全设置</h2>
                <div className="space-y-6">
                  {/* Password Change */}
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-base font-medium text-gray-900 mb-4">修改密码</h3>
                    <div className="space-y-4">
                      <input
                        type="password"
                        placeholder="当前密码"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="password"
                        placeholder="新密码"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="password"
                        placeholder="确认新密码"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        更新密码
                      </button>
                    </div>
                  </div>

                  {/* Two-Factor Auth */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-medium text-gray-900">两步验证</h3>
                        <p className="text-sm text-gray-500 mt-1">为您的账户添加额外的安全保护层</p>
                      </div>
                      <button
                        onClick={() => handleSecurityToggle("twoFactorAuth")}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          securitySettings.twoFactorAuth ? "bg-blue-600" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            securitySettings.twoFactorAuth ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Login Alerts */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-medium text-gray-900">登录提醒</h3>
                        <p className="text-sm text-gray-500 mt-1">当有新设备登录时接收通知</p>
                      </div>
                      <button
                        onClick={() => handleSecurityToggle("loginAlerts")}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          securitySettings.loginAlerts ? "bg-blue-600" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            securitySettings.loginAlerts ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">通知设置</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-6">
                    <div>
                      <h3 className="text-base font-medium text-gray-900">邮件通知</h3>
                      <p className="text-sm text-gray-500 mt-1">接收账户活动和交易的邮件通知</p>
                    </div>
                    <button
                      onClick={() => handleSecurityToggle("emailNotifications")}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        securitySettings.emailNotifications ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          securitySettings.emailNotifications ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-200 pb-6">
                    <div>
                      <h3 className="text-base font-medium text-gray-900">短信通知</h3>
                      <p className="text-sm text-gray-500 mt-1">接收重要账户活动的短信提醒</p>
                    </div>
                    <button
                      onClick={() => handleSecurityToggle("smsNotifications")}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        securitySettings.smsNotifications ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          securitySettings.smsNotifications ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">通知偏好</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm text-blue-800">
                        <input type="checkbox" className="rounded" defaultChecked />
                        交易成功通知
                      </label>
                      <label className="flex items-center gap-2 text-sm text-blue-800">
                        <input type="checkbox" className="rounded" defaultChecked />
                        卡片状态变更
                      </label>
                      <label className="flex items-center gap-2 text-sm text-blue-800">
                        <input type="checkbox" className="rounded" />
                        账户余额提醒
                      </label>
                      <label className="flex items-center gap-2 text-sm text-blue-800">
                        <input type="checkbox" className="rounded" defaultChecked />
                        系统公告
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "api" && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">API密钥管理</h2>
                <div className="space-y-6">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-yellow-800">
                        <strong>安全提示：</strong> 请妥善保管您的API密钥，不要与他人分享。如果密钥泄露，请立即重新生成。
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-medium text-gray-900">生产环境密钥</h3>
                        <p className="text-sm text-gray-500 mt-1">创建于 2026-01-15</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        活跃
                      </span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-700 mb-4">
                      sk_live_***************************abc123
                    </div>
                    <div className="flex gap-3">
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        显示完整密钥
                      </button>
                      <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm">
                        重新生成
                      </button>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-medium text-gray-900">测试环境密钥</h3>
                        <p className="text-sm text-gray-500 mt-1">创建于 2026-01-15</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        活跃
                      </span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-700 mb-4">
                      sk_test_***************************xyz789
                    </div>
                    <div className="flex gap-3">
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        显示完整密钥
                      </button>
                      <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm">
                        重新生成
                      </button>
                    </div>
                  </div>

                  <button className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Key className="w-4 h-4" />
                    创建新密钥
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
