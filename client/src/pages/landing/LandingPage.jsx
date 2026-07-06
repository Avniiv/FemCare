import Navbar from "../../components/layout/Navbar";
import FeaturesSection from "./sections/FeatureSection";
import HeroSection from "./sections/HeroSection";
import PrivacySection from "./sections/PrivacySection";
import Footer from "../../components/layout/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PrivacySection />
      <Footer />
    </>
  );
};

export default LandingPage;