import PageContainer from "../../../components/layout/PageContainer.jsx";
import PrimaryButton from "../../../components/ui/PrimaryButton.jsx";
import logo from "../../../assets/logo/logo1.png";

const CTASection = () => {
  return (
    <section className="w-full py-24">
      <PageContainer>
        <div className="flex flex-col items-center justify-center text-center gap-6 bg-gradient-to-r from-primary/10 via-background to-lavender/10 rounded-[40px] py-20 px-8">
        <img
    src={logo}
    alt="FemCare Logo"
    className="w-12 h-12"
 />
          <h2 className="text-4xl lg:text-5xl font-bold text-text max-w-2xl">
            Ready to begin your wellness journey?
          </h2>

          <p className="text-lg text-gray-500 max-w-xl">
            Every journey begins with understanding your health—and keeping
            it private.
          </p>

          <PrimaryButton className="px-8 py-4 text-lg shadow-lg hover:shadow-xl hover:scale-105">Get Started </PrimaryButton>

          <p className="text-sm text-gray-500 mt-4">
            🔒 Private by design.
            <br />
            Your data always stays yours.
          </p>
        </div>
      </PageContainer>
    </section>
  );
};

export default CTASection;