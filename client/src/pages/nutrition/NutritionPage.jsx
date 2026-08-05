import PageContainer from "../../components/layout/PageContainer.jsx";
import NutritionPhaseCard from "../../components/nutrition/NutritionPhaseCard.jsx";
import FoodRecommendationCard from "../../components/nutrition/FoodRecommendationCard.jsx";
import HydrationCard from "../../components/nutrition/HydrationCard.jsx";
import WellnessTipCard from "../../components/nutrition/WellnessTipCard.jsx";
import nutritionWatercolor from "../../assets/illustrations/nutrition-watercolor.png";

const foodCategories = [
  {
    icon: "🥬",
    title: "Iron-Rich Foods",
    benefit: "Helps replenish iron lost during your cycle.",
    examples: [
      "Spinach",
      "Lentils (Dal)",
      "Kidney Beans (Rajma)",
      "Tofu",
      "Pumpkin Seeds",
    ],
  },
  {
    icon: "🍊",
    title: "Vitamin C",
    benefit: "Supports iron absorption and immune health.",
    examples: ["Oranges", "Kiwi", "Mango", "Bell Peppers", "Guava"],
  },
  {
    icon: "🥜",
    title: "Healthy Fats",
    benefit: "Supports hormone balance and steady energy.",
    examples: ["Almonds", "Walnuts", "Peanuts", "Avocado", "Flaxseeds"],
  },
  {
    icon: "🌾",
    title: "Whole Grains",
    benefit: "Provides steady energy and supports digestion.",
    examples: ["Brown Rice", "Millets", "Quinoa", "Oats", "Whole Wheat"],
  },
];

const NutritionPage = () => {
  return (
    <section className="w-full py-10">
      <PageContainer className="flex flex-col gap-6">
        <div className="relative mb-8">

  {/* Heading */}
  <div className="max-w-xl">
    <h1 className="text-3xl font-bold text-text">
      🥗 Nutrition
    </h1>

    <p className="mt-2 text-gray-500">
      Nourish your body through every phase.
    </p>
  </div>

  {/* Illustration */}
  <img
    src={nutritionWatercolor}
    alt="Watercolor illustration representing nourishing food"
    className="
      hidden
      lg:block
      absolute
      -top-35
      right-0
      w-[100px]
      xl:w-[300px]
      h-auto
      pointer-events-none
    "
  />

</div>

        <NutritionPhaseCard
          phaseName="Follicular Phase"
          description="Your body is preparing for ovulation and energy levels are typically rising. This is a great time to fuel your body with iron-rich and vitamin-rich foods to support this natural build-up."
        />

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-text">
            Foods to Support Your Current Phase
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {foodCategories.map((category) => (
              <FoodRecommendationCard
                key={category.title}
                icon={category.icon}
                title={category.title}
                benefit={category.benefit}
                examples={category.examples}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <HydrationCard glassesConsumed={6} glassesGoal={8} />
          <WellnessTipCard tip="Pair iron-rich foods with vitamin C to improve iron absorption." />
        </div>
      </PageContainer>
    </section>
  );
};

export default NutritionPage;