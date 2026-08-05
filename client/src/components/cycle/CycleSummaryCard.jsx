import {
  CalendarDays,
  HeartPulse,
  Activity,
} from "lucide-react";
import Card from "../ui/Card.jsx";

const CycleSummaryCard = ({ currentDay, averageCycle, status }) => {
  const summaryItems = [
    {
      label: "Current Day",
      value: currentDay,
      icon: Activity,
      color: "bg-primary/10 text-primary",
    },
    {
      label: "Average Cycle",
      value: averageCycle,
      icon: CalendarDays,
      color: "bg-purple-100 text-purple-600",
    },
    {
      label: "Status",
      value: status,
      icon: HeartPulse,
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {summaryItems.map((item) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.label}
            className="flex flex-col items-center justify-center text-center gap-4 py-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center ${item.color}`}
            >
              <Icon className="w-7 h-7" />
            </div>

            <h3 className="text-4xl font-bold text-text">
              {item.value}
            </h3>

            <p className="text-sm text-gray-500 font-medium">
              {item.label}
            </p>
          </Card>
        );
      })}
    </div>
  );
};

export default CycleSummaryCard;