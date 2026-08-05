import { useState } from "react";
import Card from "../ui/Card.jsx";

const moodOptions = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😌", label: "Calm" },
  { emoji: "😴", label: "Tired" },
  { emoji: "😣", label: "Stressed" },
];

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleSelect = (label) => {
    setSelectedMood((prev) => (prev === label ? null : label));
  };

  return (
    <Card className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-text">How are you feeling?</h2>

      <div className="flex flex-wrap gap-3">
        {moodOptions.map((mood) => {
          const isSelected = selectedMood === mood.label;
          return (
            <button
              key={mood.label}
              type="button"
              onClick={() => handleSelect(mood.label)}
              className={`rounded-full px-5 py-2 font-medium transition-all duration-200 border ${
                isSelected
                  ? "bg-primary border-primary text-text"
                  : "bg-white border-gray-300 text-gray-500 hover:border-primary hover:text-text"
              }`}
            >
              {mood.emoji} {mood.label}
            </button>
          );
        })}
      </div>
    </Card>
  );
};

export default MoodSelector;