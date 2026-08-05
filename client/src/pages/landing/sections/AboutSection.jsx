import PageContainer from "../../../components/layout/PageContainer.jsx";
import SectionTitle from "../../../components/ui/SectionTitle.jsx";
import Card from "../../../components/ui/Card.jsx";
import aboutIllustration from "../../../assets/illustrations/about-watercolor.png";

const values = [
  {
    icon: "🌸",
    title: "Care",
    description:
      "Designed with empathy. Supporting every wellness journey with thoughtful experiences.",
  },
  {
    icon: "🛡",
    title: "Privacy",
    description:
      "Your data. Your decision. Delete your information whenever you choose.",
  },
  {
    icon: "✨",
    title: "Empowerment",
    description:
      "Knowledge builds confidence. Helping women understand their health with clarity.",
  },
];

const AboutSection = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-r from-white via-background to-lavender/10">
      <PageContainer className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex items-center justify-center">
          <img
            src={aboutIllustration}
            alt="Watercolor illustration representing FemCare's approach to women's health"
            className="w-full max-w-lg h-auto"
          />
        </div>

        <div className="flex flex-col gap-8">
          <SectionTitle
            title="More than a health app."
            subtitle="Built with care. Designed for privacy. Empowering every woman."
          />

          <p className="text-gray-500 leading-relaxed">
            FemCare was created to make women's health simple, supportive,
            and private. We believe every woman deserves thoughtful tools
            that help her understand her health while keeping her personal
            information completely under her control.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="flex flex-col gap-3">
                <p className="text-2xl">{value.icon}</p>
                <p className="font-bold text-text">{value.title}</p>
                <p className="text-sm text-gray-500">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default AboutSection;