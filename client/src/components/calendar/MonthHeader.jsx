import { ChevronLeft, ChevronRight } from "lucide-react";

const MonthHeader = ({ monthLabel, onPrev, onNext }) => {
  return (
    <div className="flex items-center justify-between">
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous month"
        className="w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-text transition-colors duration-200"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <h2 className="text-xl font-bold text-text">{monthLabel}</h2>

      <button
        type="button"
        onClick={onNext}
        aria-label="Next month"
        className="w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-text transition-colors duration-200"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default MonthHeader;