import Card from "../ui/Card.jsx";

const BreathingCard = () => {
  return (
    <Card className="flex flex-col items-center justify-center gap-4 text-center py-12">
      <p className="text-5xl">🌸</p>
      <p className="text-xl font-bold text-text">Inhale</p>
      <p className="text-2xl text-gray-400">↓</p>
      <p className="text-xl font-bold text-text">Exhale</p>
    </Card>
  );
};

export default BreathingCard;