import { useState } from "react";
import { Bell, Calendar, Droplet } from "lucide-react";
import Card from "../ui/Card.jsx";

const initialSettings = [
  { key: "wellness", icon: Bell, label: "🔔 Daily Wellness Reminder" },
  { key: "cycle", icon: Calendar, label: "📅 Cycle Reminder" },
  { key: "hydration", icon: Droplet, label: "💧 Hydration Reminder" },
];

const NotificationSettingsCard = () => {
  const [enabled, setEnabled] = useState({
    wellness: true,
    cycle: true,
    hydration: true,
  });

  const toggle = (key) => {
    setEnabled((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Card className="flex flex-col gap-5">
      <h2 className="text-xl font-bold text-text">Notifications</h2>

      <div className="flex flex-col gap-4">
        {initialSettings.map((item) => {
          const isOn = enabled[item.key];
          return (
            <div
              key={item.key}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <span className="text-text">{item.label}</span>
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={isOn}
                aria-label={item.label}
                onClick={() => toggle(item.key)}
                className={`w-12 h-7 rounded-full flex items-center px-1 transition-colors duration-200 flex-shrink-0 ${
                  isOn ? "bg-primary justify-end" : "bg-gray-200 justify-start"
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-white shadow-sm transition-all duration-200" />
              </button>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default NotificationSettingsCard;