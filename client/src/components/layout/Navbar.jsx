import { Link, useNavigate } from "react-router-dom";
import PageContainer from "./PageContainer.jsx";
import PrimaryButton from "../ui/PrimaryButton.jsx";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-white/80 backdrop-blur-md shadow-sm">
      <PageContainer className="flex items-center justify-between py-4">

        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <h1 className="text-2xl font-bold text-text hover:text-primary transition-colors duration-200">
            🌸 FemCare
          </h1>

          <p className="text-xs text-gray-500">
            Care. Confidence. Control.
          </p>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-10">

<button
  type="button"
  onClick={() =>
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="text-text hover:text-primary transition-colors duration-200"
>
  About
</button>

<button
  type="button"
  onClick={() =>
    document
      .getElementById("features")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="text-text hover:text-primary transition-colors duration-200"
>
  Features
</button>

<button
  type="button"
  onClick={() =>
    document
      .getElementById("privacy")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="text-text hover:text-primary transition-colors duration-200"
>
  Privacy
</button>



        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-text hover:text-primary transition-colors duration-200 cursor-pointer"
          >
            Login
          </button>

          <PrimaryButton
            onClick={() => navigate("/register")}
          >
            Get Started
          </PrimaryButton>

        </div>

      </PageContainer>
    </nav>
  );
};

export default Navbar;