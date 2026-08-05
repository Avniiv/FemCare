import Card from "../ui/Card.jsx";

const OverviewCard = ({ icon: Icon, iconBg = "bg-primary", label, value }) => {
  return (
    <Card className="flex flex-col gap-4">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBg}`}
      >
        <Icon className="w-5 h-5 text-text" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-lg font-bold text-text">{value}</p>
      </div>
    </Card>
  );
};

export default OverviewCard;