import PageContainer from "./PageContainer.jsx";
import PrimaryButton from "../ui/PrimaryButton.jsx";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <PageContainer className="flex items-center justify-between py-4">
        <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-text">
                🌸 FemCare
            </h1>

            <p className="text-xs text-gray-500">
                Care. Confidence. Control.
            </p>
        </div>

        <div className="flex items-center gap-8">
          <span className="text-text cursor-pointer">Features</span>
          <span className="text-text cursor-pointer">Privacy</span>
          <span className="text-text cursor-pointer">About</span>
        </div>

        <div className="flex items-center gap-4">
          <button 
                type="button"
                className="text-text transition-colors duration-200 hover:text-primary/80"
>Login</button>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </PageContainer>
    </nav>
  );
};

export default Navbar;