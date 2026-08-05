import Navbar from "../../components/layout/Navbar";
import FeaturesSection from "./sections/FeatureSection";
import HeroSection from "./sections/HeroSection";
import PrivacySection from "./sections/PrivacySection";
import Footer from "../../components/layout/Footer";
import AboutSection from "./sections/AboutSection";
import CTASection from "./sections/CTASection";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="privacy">
        <PrivacySection />
      </div>
      <CTASection />
      <Footer />
    </>
  );
};

export default LandingPage;