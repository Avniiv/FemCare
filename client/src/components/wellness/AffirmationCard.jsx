import Card from "../ui/Card.jsx";

const AffirmationCard = ({ affirmation }) => {
  return (
    <Card className="flex flex-col items-center justify-center gap-4 text-center py-12 bg-gradient-to-br from-white to-lavender/20">
      <p className="text-2xl lg:text-3xl font-bold text-text leading-relaxed max-w-md">
        “{affirmation}”
      </p>
    </Card>
  );
};

export default AffirmationCard;