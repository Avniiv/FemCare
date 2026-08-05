import Card from "../ui/Card.jsx";

const AboutCard = () => {
  return (
    <Card className="flex flex-col items-center gap-3 text-center py-10">
      <p className="text-xl font-bold text-text">🌸 FemCare</p>
      <p className="text-sm text-gray-500">Version 1.0.0</p>

      <span className="text-xs font-medium text-text bg-lavender rounded-full px-3 py-1">
        Privacy First
      </span>

      <p className="text-sm text-gray-500 mt-2">
        Made with ❤️ for women's wellness.
      </p>
    </Card>
  );
};

export default AboutCard;