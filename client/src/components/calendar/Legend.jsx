const legendItems = [
  { label: "Period", swatchClass: "bg-primary" },
  { label: "Ovulation", swatchClass: "bg-lavender" },
  { label: "Predicted", swatchClass: "bg-gray-200" },
  { label: "Today", swatchClass: "bg-white ring-2 ring-primary" },
];

const CalendarLegend = () => {
  return (
    <div className="flex flex-wrap items-center gap-6">
      {legendItems.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${item.swatchClass}`} />
          <span className="text-sm text-gray-500">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CalendarLegend;