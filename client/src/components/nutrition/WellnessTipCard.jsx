import { Sparkles } from "lucide-react";
import Card from "../ui/Card.jsx";

const WellnessTipCard = ({ tip }) => {
  return (
    <Card className="flex flex-col gap-3 bg-gradient-to-br from-white to-accent/20">
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-text" />
        <p className="font-bold text-text">Today's Wellness Tip</p>
      </div>
      <p className="text-gray-500 leading-relaxed">{tip}</p>
    </Card>
  );
};

export default WellnessTipCard;