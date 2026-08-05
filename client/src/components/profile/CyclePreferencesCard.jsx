import Card from "../ui/Card.jsx";

const cyclePreferences = [
  { label: "Average Cycle Length", value: "28 Days" },
  { label: "Last Period Date", value: "June 29, 2026" },
];

const CyclePreferencesCard = () => {
  return (
    <Card className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-text">Cycle Preferences</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cyclePreferences.map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="text-lg font-bold text-text">{item.value}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CyclePreferencesCard;