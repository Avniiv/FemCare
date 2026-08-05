import Card from "../ui/Card.jsx";

const FoodRecommendationCard = ({ icon, title, benefit, examples }) => {
  return (
    <Card className="flex flex-col gap-3">
      <p className="text-2xl">{icon}</p>
      <h3 className="text-lg font-bold text-text">{title}</h3>
      <p className="text-sm text-gray-500">{benefit}</p>
      <div className="flex flex-wrap gap-2 mt-1">
        {examples.map((food) => (
          <span
            key={food}
            className="text-xs font-medium text-text bg-background border border-gray-100 rounded-full px-3 py-1"
          >
            {food}
          </span>
        ))}
      </div>
    </Card>
  );
};

export default FoodRecommendationCard;