import PageContainer from "../../components/layout/PageContainer.jsx";
import EmergencyContactCard from "../../components/emergency/EmergencyContactCard.jsx";
import WarningSignsCard from "../../components/emergency/WarningSignsCard.jsx";
import SafetyTipsCard from "../../components/emergency/SafetyTipsCard.jsx";
import DisclaimerCard from "../../components/emergency/DisclaimerCard.jsx";
import emergencyWatercolor from "../../assets/illustrations/emergency-watercolor.png";

const emergencyContacts = [
  {
    icon: "📞",
    title: "Emergency Services",
    description: "Call local emergency services immediately if you need urgent help.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Trusted Contact",
    description: "Reach out to someone you trust for support right away.",
  },
  {
    icon: "🏥",
    title: "Nearby Hospital",
    description: "Find the closest hospital or urgent care facility near you.",
  },
];

const EmergencyPage = () => {
  return (
    <section className="w-full py-10 bg-gradient-to-br from-background via-white to-primary/10">
      <PageContainer className="flex flex-col gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold text-text">
              🚨 Emergency Support
            </h1>
            <p className="text-gray-500 font-medium">
              Quick access when you need it most.
            </p>
            <p className="text-gray-500 leading-relaxed">
              If you're experiencing severe symptoms or need urgent assistance, seek immediate medical attention or contact someone you trust. FemCare helps you quickly access important resources but does not replace professional medical care.
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <img
              src={emergencyWatercolor}
              alt="Watercolor illustration featuring a first-aid kit, smartphone, FemCare shield, flowers, and leaves"
              className="w-full max-w-xs h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {emergencyContacts.map((contact) => (
            <EmergencyContactCard
              key={contact.title}
              icon={contact.icon}
              title={contact.title}
              description={contact.description}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <WarningSignsCard />
          <SafetyTipsCard />
        </div>

        <DisclaimerCard />
      </PageContainer>
    </section>
  );
};

export default EmergencyPage;