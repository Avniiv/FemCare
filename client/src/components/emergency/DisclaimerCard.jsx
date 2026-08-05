import { Info } from "lucide-react";
import Card from "../ui/Card.jsx";

const DisclaimerCard = () => {
  return (
    <Card className="flex items-start gap-3 bg-background border-gray-100">
      <Info className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
      <p className="text-sm text-gray-500 leading-relaxed">
        FemCare supports your wellness journey but is not a substitute for
        emergency medical services, professional medical advice, diagnosis,
        or treatment.
      </p>
    </Card>
  );
};

export default DisclaimerCard;