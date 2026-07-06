import PageContainer from "./PageContainer.jsx";
import { Mail } from "lucide-react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <PageContainer className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold text-text">🌸 FemCare</p>
            <p className="text-gray-500">
              Women's health, designed with privacy at its core.
            </p>
            <p className="text-gray-500">
              Made with care. Built for every woman.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <FaInstagram className="w-5 h-5 text-gray-500 hover:text-primary transition-colors duration-200 cursor-pointer" />
              <FaLinkedin className="w-5 h-5 text-gray-500 hover:text-primary transition-colors duration-200 cursor-pointer" />
              <FaGithub className="w-5 h-5 text-gray-500 hover:text-primary transition-colors duration-200 cursor-pointer" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-text">Quick Links</p>
            <span className="text-gray-500 hover:text-primary transition-colors duration-200 cursor-pointer">
              Home
            </span>
            <span className="text-gray-500 hover:text-primary transition-colors duration-200 cursor-pointer">
              Features
            </span>
            <span className="text-gray-500 hover:text-primary transition-colors duration-200 cursor-pointer">
              Privacy
            </span>
            <span className="text-gray-500 hover:text-primary transition-colors duration-200 cursor-pointer">
              Login
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-text">Contact</p>
            <span className="flex items-center gap-2 text-gray-500">
              <Mail className="w-4 h-4" />
              support@femcare.app
            </span>
          </div>
        </div>

        <hr className="border-gray-100 my-8" />

        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-text">
            🌸 Your health journey belongs to you—not to us.
          </p>
          <p className="text-text">Your health. Your privacy. Your control.</p>
          <p className="text-sm text-gray-500">
            © 2026 FemCare. All rights reserved.
          </p>
        </div>
      </PageContainer>
    </footer>
  );
};

export default Footer;