import { useState } from "react";
import Card from "../ui/Card.jsx";

const symptomOptions = [
  { emoji: "💖", label: "Cramps" },
  { emoji: "🤕", label: "Headache" },
  { emoji: "😊", label: "Mood Swings" },
  { emoji: "😴", label: "Fatigue" },
  { emoji: "🌸", label: "Bloating" },
  { emoji: "⚡", label: "Low Energy" },
];

const SymptomSelector = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((item) => item !== symptom)
        : [...prev, symptom]
    );
  };

  return (
    <Card className="flex flex-col gap-6">

      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-text">
          Today's Symptoms
        </h2>

        <p className="text-sm text-gray-500">
          Select everything that applies today.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        {symptomOptions.map((symptom) => {
          const isSelected = selectedSymptoms.includes(symptom.label);

          return (
            <button
              key={symptom.label}
              type="button"
              onClick={() => toggleSymptom(symptom.label)}
              className={`
                flex items-center gap-2
                rounded-full
                px-5 py-3
                border
                font-medium
                transition-all
                duration-300
                hover:scale-105
                ${
                  isSelected
                    ? "bg-primary text-white border-primary shadow-md"
                    : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:bg-primary/5"
                }
              `}
            >
              <span className="text-lg">
                {symptom.emoji}
              </span>

              {symptom.label}
            </button>
          );
        })}
      </div>

    </Card>
  );
};

export default SymptomSelector;