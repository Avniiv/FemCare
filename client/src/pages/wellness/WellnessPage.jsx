import PageContainer from "../../components/layout/PageContainer.jsx";
import MoodSelector from "../../components/wellness/MoodSelector.jsx";
import SelfCareCard from "../../components/wellness/SelfCareCard.jsx";
import AffirmationCard from "../../components/wellness/AffirmationCard.jsx";
import BreathingCard from "../../components/wellness/BreathingCard.jsx";
import wellnessWatercolor from "../../assets/illustrations/wellness-watercolor.png";

const selfCareSuggestions = [
  { icon: "🧘", label: "Stretch for 10 minutes" },
  { icon: "🚶", label: "Take a short walk" },
  { icon: "💧", label: "Drink enough water" },
  { icon: "📖", label: "Write in your journal" },
];

const WellnessPage = () => {
  return (
    <section className="w-full py-10 bg-gradient-to-br from-background via-white to-primary/10">
      <PageContainer className="flex flex-col gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-text">💖 Wellness</h1>
            <p className="text-gray-500">
              Caring for your mind and body, every day.
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <img
              src={wellnessWatercolor}
              alt="Watercolor illustration representing self-care"
              className="w-full max-w-xs h-auto"
            />
          </div>
        </div>

        <MoodSelector />

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-text">Self-Care Suggestions</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {selfCareSuggestions.map((suggestion) => (
              <SelfCareCard
                key={suggestion.label}
                icon={suggestion.icon}
                label={suggestion.label}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AffirmationCard affirmation="You deserve kindness, patience, and care." />
          <BreathingCard />
        </div>
      </PageContainer>
    </section>
  );
};

export default WellnessPage;