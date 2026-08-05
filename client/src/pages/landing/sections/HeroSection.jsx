import { useNavigate } from "react-router-dom";
import PageContainer from "../../../components/layout/PageContainer.jsx";
import PrimaryButton from "../../../components/ui/PrimaryButton.jsx";
import Card from "../../../components/ui/Card.jsx";
import heroWatercolor from "../../../assets/illustrations/hero-watercolor.png";
import "../../../styles/animations.css";


const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full min-h-screen py-20 bg-gradient-to-br from-background via-white to-primary/10">
      <PageContainer className="grid grid-cols-1 lg:grid-cols-2 gap-30 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-text leading-tight">
            Women's health, designed with privacy at its core.
          </h1>

          <p className="text-lg text-gray-500">
            Track your cycle, monitor your wellness, and access trusted health
            resources—all while keeping your personal health data completely
            under your control.
          </p>

          <div className="flex items-center gap-4">
            <PrimaryButton
  onClick={() => navigate("/register")}
>
  Get Started
</PrimaryButton>
            <button
  type="button"
  onClick={() =>
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="rounded-xl px-6 py-3 font-medium transition-all duration-200 border border-pink-200 text-text hover:bg-primary"
>
  Learn More
</button>
          </div>

          <p className="text-sm text-gray-500">
            🌸 Built with care. Designed for privacy.
          </p>
        </div>

       <div className="flex items-center justify-center w-full">
        <div className="relative w-full flex justify-center">
         <img
            src={heroWatercolor}
            alt="Women's wellness illustration"
            className="w-full max-w-[650px] h-auto rounded-xl drop-shadow-xl animate-float"
        />
          <Card className="absolute -top-15 -left-12 w-70 -rotate-2 animate-float-slow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ">
             <div className="flex items-start gap-3">
                <span className="text-2xl ">
                    🔒
                </span>
                <div>

                    <h4 className="font-semibold text-text">
                        Privacy First
                    </h4>
                    <p className="text-sm text-gray-500">
                        Delete your data anytime.
                    </p>
                </div>
             </div>
          </Card>

          <Card className="absolute top-1/3 -right-35 w-70 rotate-2 animate-float-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌸</span>
            <div>
                <h4 className="font-semibold text-text">
                         Smart Tracking
                    </h4>
                    <p className="text-sm text-gray-500">
                        Personalized cycle insights.
                    </p>
            </div>
          </div>
          </Card>

          <Card className="absolute -bottom-15 left-16 w-90 -rotate-1 animate-float-fast transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start gap-3">
            <span className="text-2xl">🥗</span>
            <div>
                <h4 className="font-semibold text-text">
                         Wellness &amp; Nutrition
                    </h4>
                    <p className="text-sm text-gray-500">
                        Nutrition guidance for every stage.
                    </p>
            </div>
          </div>
          </Card>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default HeroSection;