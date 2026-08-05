import { Droplet } from "lucide-react";
import Card from "../ui/Card.jsx";

const HydrationCard = ({ glassesConsumed = 6, glassesGoal = 8 }) => {
  const progressPercent = Math.min(
    100,
    Math.round((glassesConsumed / glassesGoal) * 100)
  );

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary">
          <Droplet className="w-5 h-5 text-text" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Hydration</p>
          <p className="text-lg font-bold text-text">
            {glassesConsumed} / {glassesGoal} glasses
          </p>
        </div>
      </div>

      <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-secondary"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </Card>
  );
};

export default HydrationCard;