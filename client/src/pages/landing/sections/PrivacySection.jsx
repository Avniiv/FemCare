import PageContainer from "../../../components/layout/PageContainer.jsx";
import SectionTitle from "../../../components/ui/SectionTitle.jsx";
import Card from "../../../components/ui/Card.jsx";

const privacyPoints = [
  {
    icon: "🔒",
    title: "Private by Design",
    description:
      "Your health information is protected from the moment you create your account.",
  },
  {
    icon: "🗑️",
    title: "Delete Anytime",
    description:
      "Permanently delete your account and health records whenever you choose.",
  },
  {
    icon: "🛡️",
    title: "Secure Storage",
    description:
      "Your personal health data is securely stored and handled with care.",
  },
];

const PrivacySection = () => {
  return (
    <section className="w-full py-20 bg-lavender/20">
      <PageContainer className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center items-center">
          <SectionTitle
            title="Our Privacy Promise"
            subtitle="Your health journey belongs to you—not to us."
          />
          <p className="text-gray-500 max-w-2xl">
            At FemCare, we believe privacy isn't an extra feature—it's a
            fundamental right. That's why you stay in control of your health
            information every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {privacyPoints.map((point) => (
            <Card key={point.title} className="flex flex-col gap-4 hover: -translate-y-2 hover:shadow-xl">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl bg-lavender">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-text">{point.title}</h3>
              <p className="text-gray-500">{point.description}</p>
            </Card>
          ))}
        </div>
      </PageContainer>
    </section>
  );
};

export default PrivacySection;