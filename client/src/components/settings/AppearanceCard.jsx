import Card from "../ui/Card.jsx";

const AppearanceCard = () => {
  return (
    <Card className="flex flex-col gap-5">
      <h2 className="text-xl font-bold text-text">Appearance</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center justify-between gap-3 rounded-2xl border-2 border-primary bg-primary/10 px-5 py-4">
          <span className="font-medium text-text">🌸 Light Theme</span>
          <span className="text-xs font-medium text-text bg-primary rounded-full px-3 py-1">
            Selected
          </span>
        </div>

        <div className="flex items-center justify-between gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 cursor-not-allowed">
          <span className="font-medium text-gray-400">🌙 Dark Theme</span>
          <span className="text-xs font-medium text-gray-500 bg-gray-200 rounded-full px-3 py-1">
            Coming Soon
          </span>
        </div>
      </div>
    </Card>
  );
};

export default AppearanceCard;