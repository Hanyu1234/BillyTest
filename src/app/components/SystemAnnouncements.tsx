import { FileText } from "lucide-react";

export function SystemAnnouncements() {
  const announcements = [
    {
      title: "系统公告",
      content: "通知：银行于今日下午238003，246001卡段，已升级。存在的卡片不受任何影响，无法新开卡该两个卡段的卡批量备用的朋友——H...",
      date: "03-24 03:04"
    },
    {
      title: "用卡须知:",
      content: "凡是用技术台刷禁止出现捆绑禁禁扣号台捆绑后自动封禁的，禁止提款，永久封禁！自解服务平台 (PRIZEPICKS、WHATNOT、STOCKX、...",
      date: "05-24 23:29"
    },
    {
      title: "重要通知！！",
      content: "重要通知！！近期我现有人员怀疑商用户经理后查用户资金全金，请各位查台用户一定注意路购的！平台人工充值信不会要营改换其他地址，如果有更...",
      date: "04-22 22:33"
    },
    {
      title: "平台公告",
      content: "平台所有重要公告默认都会在后台即时发布 请全时的大家请注意查看！！Telegram频道中对营购弹出公告中进行发布，请各位老板及卖注意查看！现在特别要Telegram频道中不定时分享Face...",
      date: "01-03 01:22"
    },
    {
      title: "平台公告！",
      content: "使用线上充值会产生寻滴金它2.5U的能能查储卖查用招商此也费用的用户可以被选购款个人的客户经理或者平台客服进行人工充现购款下充...",
      date: "12-04 02:50"
    },
    {
      title: "系统使用:",
      content: "",
      date: "10-19 06:20"
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm h-full">
      <h2 className="text-base font-semibold text-gray-900 mb-4">系统公告</h2>
      <div className="space-y-4">
        {announcements.map((announcement, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
          >
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-sm font-medium text-gray-900">{announcement.title}</h3>
                <span className="text-xs text-gray-500 flex-shrink-0">{announcement.date}</span>
              </div>
              {announcement.content && (
                <p className="text-sm text-gray-600 line-clamp-2">{announcement.content}</p>
              )}
            </div>
            <button className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center hover:bg-gray-400 transition-colors">
              →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
