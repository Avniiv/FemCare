import { useState } from "react";
import { Droplet } from "lucide-react";
import Card from "../ui/Card.jsx";

const dietOptions = ["Vegetarian", "Vegan", "Eggetarian", "Non-Vegetarian"];

const LifestyleCard = () => {
  const [selectedDiet, setSelectedDiet] = useState("Vegetarian");

  return (
    <Card className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-text">Lifestyle</h2>

      <div className="flex flex-col gap-3">
        <p className="text-sm text-gray-500">Diet Preference</p>
        <div className="flex flex-wrap gap-3">
          {dietOptions.map((diet) => {
            const isSelected = selectedDiet === diet;
            return (
              <button
                key={diet}
                type="button"
                onClick={() => setSelectedDiet(diet)}
                className={`rounded-full px-5 py-2 font-medium transition-all duration-200 border ${
                  isSelected
                    ? "bg-primary border-primary text-text"
                    : "bg-white border-gray-300 text-gray-500 hover:border-primary hover:text-text"
                }`}
              >
                {diet}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary">
          <Droplet className="w-5 h-5 text-text" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Daily Water Goal</p>
          <p className="text-lg font-bold text-text">8 Glasses</p>
        </div>
      </div>
    </Card>
  );
};

export default LifestyleCard;