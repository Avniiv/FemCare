import Card from "../ui/Card.jsx";

const NutritionPhaseCard = ({ phaseName, description }) => {
  return (
    <Card className="flex flex-col gap-3">
      <p className="text-sm text-gray-500">Current Phase</p>
      <h2 className="text-2xl font-bold text-text">{phaseName}</h2>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </Card>
  );
};

export default NutritionPhaseCard;