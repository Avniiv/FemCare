import Card from "../ui/Card.jsx";

const QuickActionCard = ({ icon: Icon, iconBg = "bg-primary", label }) => {
  return (
    <Card className="flex flex-col items-center justify-center gap-3 text-center cursor-pointer hover:shadow-lg transition-shadow duration-200">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBg}`}
      >
        <Icon className="w-5 h-5 text-text" />
      </div>
      <p className="font-medium text-text">{label}</p>
    </Card>
  );
};

export default QuickActionCard;