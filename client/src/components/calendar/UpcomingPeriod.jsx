import { Droplet, Moon, TrendingUp } from "lucide-react";
import Card from "../ui/Card.jsx";

const upcomingItems = [
  {
    icon: Droplet,
    iconBg: "bg-primary",
    label: "Next Period",
    value: "In 12 Days",
  },
  {
    icon: Moon,
    iconBg: "bg-lavender",
    label: "Ovulation Window",
    value: "Jul 18 – Jul 22",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-secondary",
    label: "Predicted Length",
    value: "5 Days",
  },
];

const UpcomingCycleCard = () => {
  return (
    <Card className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-text">Upcoming Cycle</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {upcomingItems.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${item.iconBg}`}
            >
              <item.icon className="w-4 h-4 text-text" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="font-bold text-text">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default UpcomingCycleCard;