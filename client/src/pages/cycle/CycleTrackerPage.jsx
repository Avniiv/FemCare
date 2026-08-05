import PageContainer from "../../components/layout/PageContainer.jsx";
import PrimaryButton from "../../components/ui/PrimaryButton.jsx";
import CycleSummaryCard from "../../components/cycle/CycleSummaryCard.jsx";
import SymptomSelector from "../../components/cycle/SymptomSelector.jsx";
import NotesCard from "../../components/cycle/NotesCard.jsx";
import Card from "../../components/ui/Card.jsx";
import cycleIllustration from "../../assets/illustrations/cycle-watercolor.png"; // Add this illustration

const CycleTrackerPage = () => {
  return (
    <section className="w-full py-12 bg-gradient-to-br from-background via-white to-primary/5">
      <PageContainer className="flex flex-col gap-10 max-w-5xl">

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-text">
              🌸 Cycle Tracker
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed">
              Keep understanding your body, one day at a time.
            </p>

            <p className="text-gray-400 italic">
              Every entry helps you better understand your health.
            </p>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src={cycleIllustration}
              alt="Cycle Tracker Illustration"
              className="w-full max-w-md"
            />
          </div>

        </div>

        {/* Main Card */}
        <Card className="flex flex-col gap-8 p-8">

          {/* Overview */}
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold text-text">
              Today's Overview
            </h2>

            <p className="text-sm text-gray-500">
              A quick snapshot of your current cycle.
            </p>
          </div>

          <CycleSummaryCard
            currentDay={12}
            averageCycle="28 Days"
            status="Regular"
          />

          <hr className="border-gray-100" />

          {/* Symptoms */}
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold text-text">
              Today's Symptoms
            </h2>

            <p className="text-sm text-gray-500">
              Select everything that applies today.
            </p>
          </div>

          <SymptomSelector />

          <hr className="border-gray-100" />

          {/* Journal */}
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold text-text">
              Today's Journal
            </h2>

            <p className="text-sm text-gray-500">
              Write anything you'd like to remember.
            </p>
          </div>

          <NotesCard />

          <p className="text-center text-sm italic text-gray-400">
            ✨ Every entry helps you understand your body better.
          </p>

          <PrimaryButton className="w-full py-4 text-lg">
            Save Today's Entry
          </PrimaryButton>

        </Card>
      </PageContainer>
    </section>
  );
};

export default CycleTrackerPage;