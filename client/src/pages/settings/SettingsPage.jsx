import PageContainer from "../../components/layout/PageContainer.jsx";
import NotificationSettingsCard from "../../components/settings/NotificationSettingsCard.jsx";
import AppearanceCard from "../../components/settings/AppearanceCard.jsx";
import LanguageCard from "../../components/settings/LanguageCard.jsx";
import AccountCard from "../../components/settings/AccountCard.jsx";
import AboutCard from "../../components/settings/AboutCard.jsx";
import settingsWatercolor from "../../assets/illustrations/settings-watercolor.png";

const SettingsPage = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-background via-white to-primary/10">
      <PageContainer className="max-w-6xl flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-5">

  <h1 className="text-4xl lg:text-5xl font-bold text-text leading-tight">
    ⚙️ Settings
  </h1>

  <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
    Customize your FemCare experience.
  </p>

  <p className="text-gray-500 max-w-xl leading-relaxed">
    Manage reminders, personalize your experience, and control how
    FemCare works for you. Every setting is designed to be simple,
    secure, and always under your control.
  </p>
  <hr className="border-gray-100" />

</div>

          <div className="hidden lg:flex items-center justify-center">
            <img
              src={settingsWatercolor}
              alt="Watercolor illustration representing app settings"
              className="w-full max-w-sm h-auto animate-float-slow"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <NotificationSettingsCard />
          <AppearanceCard />
          <LanguageCard />
          <AccountCard />
        </div>

        <AboutCard />
        <p className="text-center text-sm italic text-gray-400">
  🌸 Thoughtfully designed for your wellness.
</p>
      </PageContainer>
    </section>
  );
};

export default SettingsPage;