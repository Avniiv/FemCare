import Card from "../ui/Card.jsx";

const SelfCareCard = ({ icon, label }) => {
  return (
    <Card className="flex flex-col items-center justify-center gap-3 text-center cursor-pointer hover:shadow-lg transition-shadow duration-200">
      <p className="text-2xl">{icon}</p>
      <p className="font-medium text-text">{label}</p>
    </Card>
  );
};

export default SelfCareCard;