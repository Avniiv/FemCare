import { useState } from "react";
import { Globe } from "lucide-react";
import Card from "../ui/Card.jsx";

const languageOptions = ["English", "Hindi", "Spanish", "French"];

const LanguageCard = () => {
  const [language, setLanguage] = useState("English");

  return (
    <Card className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-text">Language</h2>

      <div className="flex items-center gap-3">
        <Globe className="w-5 h-5 text-gray-500 flex-shrink-0" />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        >
          {languageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </Card>
  );
};

export default LanguageCard;