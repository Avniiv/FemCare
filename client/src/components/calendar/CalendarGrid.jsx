const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarGrid = ({
  year,
  month,
  periodDays = [],
  ovulationDays = [],
  predictedDays = [],
  today = new Date(),
}) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstWeekday = new Date(year, month, 1).getDay();

  const cells = [
    ...Array(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const isToday = (day) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  const getFillClasses = (day) => {
    if (periodDays.includes(day)) return "bg-primary text-text";
    if (ovulationDays.includes(day)) return "bg-lavender text-text";
    if (predictedDays.includes(day)) return "bg-gray-200 text-gray-600";
    return "text-text";
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-7 gap-2">
        {weekdayLabels.map((label) => (
          <div
            key={label}
            className="text-center text-sm font-medium text-gray-500"
          >
            {label}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {cells.map((day, index) =>
          day === null ? (
            <div key={`empty-${index}`} />
          ) : (
            <div
              key={day}
              className={`aspect-square rounded-full flex items-center justify-center text-sm mx-auto w-9 ${getFillClasses(
                day
              )} ${
                isToday(day)
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-white"
                  : ""
              }`}
            >
              {day}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CalendarGrid;