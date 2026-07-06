import PageContainer from "../../../components/layout/PageContainer.jsx";
import PrimaryButton from "../../../components/ui/PrimaryButton.jsx";
import Card from "../../../components/ui/Card.jsx";

const HeroSection = () => {
  return (
    <section className="w-full py-24 lg:py-32">
      <PageContainer className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-text leading-tight">
            Women's health, designed with privacy at its core.
          </h1>

          <p className="text-lg text-gray-500">
            Track your cycle, monitor your wellness, and access trusted health
            resources—all while keeping your personal health data completely
            under your control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <PrimaryButton>Get Started</PrimaryButton>
            <button className="rounded-xl px-6 py-3 font-medium transition-all duration-200 border border-gray-300 text-text hover:bg-primary/30">
              Learn More
            </button>
          </div>

          <p className="text-sm text-gray-500">
            🌸 Built with care. Designed for privacy.
          </p>
        </div>

        <div className="relative">
          <Card className="flex items-center justify-center h-80">
            <p className="text-gray-400">Women's HealthI llustration</p>
          </Card>

          <Card className="absolute -bottom-8 right-8 max-w-xs">
            <p className="font-medium text-text">🔒 Privacy First</p>
            <p className="text-sm text-gray-500">Your data belongs to you.</p>
            <p className="text-sm text-gray-500">Delete it anytime.</p>
          </Card>
        </div>
      </PageContainer>
    </section>
  );
};

export default HeroSection;