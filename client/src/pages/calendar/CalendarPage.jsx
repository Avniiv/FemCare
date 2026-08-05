import { useState } from "react";
import PageContainer from "../../components/layout/PageContainer.jsx";
import Card from "../../components/ui/Card.jsx";
import MonthHeader from "../../components/calendar/MonthHeader.jsx";
import CalendarGrid from "../../components/calendar/CalendarGrid.jsx";
import CalendarLegend from "../../components/calendar/Legend.jsx";
import UpcomingCycleCard from "../../components/calendar/UpcomingPeriod.jsx";
import calendarWatercolor from "../../assets/illustrations/calendar-watercolor.png";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Static example highlight data. Will come from backend later.
const periodDays = [1, 2, 3, 4, 5];
const ovulationDays = [14];
const predictedDays = [26, 27, 28];

const CalendarPage = () => {
  const today = new Date();

  const [viewDate, setViewDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const handlePrevMonth = () => {
    setViewDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setViewDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const monthLabel = `${
    monthNames[viewDate.getMonth()]
  } ${viewDate.getFullYear()}`;

  return (
    <section className="w-full py-16 bg-gradient-to-br from-background via-white to-primary/10">
      <PageContainer className="max-w-6xl flex flex-col gap-14">

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="flex flex-col gap-5">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Women's Wellness
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold text-text leading-tight">
              🌸 Calendar
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-gray-500">
              Understand your cycle with clarity, stay prepared for every phase,
              and keep your wellness journey beautifully organized.
            </p>

          </div>

          {/* Right */}
          <div className="hidden lg:flex justify-center">
            <img
              src={calendarWatercolor}
              alt="FemCare watercolor calendar illustration"
              className="w-full max-w-sm h-auto animate-float-slow"
            />
          </div>

        </div>

        <hr className="border-gray-100" />

        {/* Calendar + Upcoming Card */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">

          {/* Calendar */}
          <Card className="xl:col-span-2 flex flex-col gap-8 p-8">

            <MonthHeader
              monthLabel={monthLabel}
              onPrev={handlePrevMonth}
              onNext={handleNextMonth}
            />

            <CalendarGrid
              year={viewDate.getFullYear()}
              month={viewDate.getMonth()}
              periodDays={periodDays}
              ovulationDays={ovulationDays}
              predictedDays={predictedDays}
              today={today}
            />

            <CalendarLegend />

          </Card>

          {/* Sidebar */}
          <UpcomingCycleCard />

        </div>

      </PageContainer>
    </section>
  );
};

export default CalendarPage;