import PageContainer from "../../../components/layout/PageContainer.jsx";
import SectionTitle from "../../../components/ui/SectionTitle.jsx";
import Card from "../../../components/ui/Card.jsx";

const features = [
  {
    icon: "🌸",
    iconBg: "bg-primary",
    title: "Smart Cycle Tracking",
    description:
      "Log your cycle with ease and get predictions that adapt to your body over time.",
  },
  {
    icon: "🥗",
    iconBg: "bg-success",
    title: "Wellness & Nutrition",
    description:
      "Get personalized nutrition guidance to support your health at every stage.",
  },
  {
    icon: "🔒",
    iconBg: "bg-lavender",
    title: "Privacy First",
    description:
      "Your health journey belongs to you—not to us. Delete your data whenever you choose.",
  },
  {
    icon: "🚨",
    iconBg: "bg-secondary",
    title: "Emergency Support",
    description:
      "Quick access to trusted resources and contacts when you need help fast.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full py-20">
      <PageContainer className="flex flex-col gap-12">
        <SectionTitle className="text-center max-w-2xl mx-auto"
          title="Everything you need for your health journey"
          subtitle="FemCare brings together essential tools to help you stay informed, healthy, and in control."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="flex flex-col gap-4 hover: -translate-y-2 hover:shadow-xl">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${feature.iconBg}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-text">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </Card>
          ))}
        </div>
      </PageContainer>
    </section>
  );
};

export default FeaturesSection;