import Card from "../ui/Card.jsx";

const EmergencyContactCard = ({ icon, title, description }) => {
  return (
    <Card className="flex flex-col gap-3 cursor-pointer hover:shadow-lg transition-shadow duration-200">
      <p className="text-2xl">{icon}</p>
      <h3 className="text-lg font-bold text-text">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </Card>
  );
};

export default EmergencyContactCard;