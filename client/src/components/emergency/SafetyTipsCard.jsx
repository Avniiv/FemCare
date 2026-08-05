import { CheckCircle2 } from "lucide-react";
import Card from "../ui/Card.jsx";

const safetyTips = [
  { icon: "💧", label: "Stay hydrated" },
  { icon: "📍", label: "Share your location with someone you trust" },
  { icon: "📱", label: "Keep your phone charged and nearby" },
];

const SafetyTipsCard = () => {
  return (
    <Card className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-text">Safety Tips</h2>

      <ul className="flex flex-col gap-3">
        {safetyTips.map((tip) => (
          <li key={tip.label} className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-text flex-shrink-0" />
            <span className="text-text">
              {tip.icon} {tip.label}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default SafetyTipsCard;