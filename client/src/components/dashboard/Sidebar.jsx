import {
  LayoutDashboard,
  Droplet,
  Calendar,
  Apple,
  Heart,
  AlertTriangle,
  User,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Droplet, label: "Cycle Tracker" },
  { icon: Calendar, label: "Calendar" },
  { icon: Apple, label: "Nutrition" },
  { icon: Heart, label: "Wellness" },
  { icon: AlertTriangle, label: "Emergency" },
  { icon: User, label: "Profile" },
];

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-64 bg-white rounded-3xl shadow-md border border-gray-100 p-6 flex flex-col gap-2 h-fit">
      <p className="text-xl font-bold text-text mb-4">🌸 FemCare</p>

      {navItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer transition-colors duration-200 ${
              index === 0
                ? "bg-primary text-text"
                : "text-gray-500 hover:bg-gray-50 hover:text-text"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;