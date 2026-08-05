import PageContainer from "../../components/layout/PageContainer.jsx";
import PrimaryButton from "../../components/ui/PrimaryButton.jsx";
import PersonalInfoCard from "../../components/profile/PersonalInfoCard.jsx";
import CyclePreferencesCard from "../../components/profile/CyclePreferencesCard.jsx";
import LifestyleCard from "../../components/profile/LifestyleCard.jsx";
import PrivacyCard from "../../components/profile/PrivacyCard.jsx";
import profileWatercolor from "../../assets/illustrations/profile-watercolor.png";

const ProfilePage = () => {
  return (
    <section className="w-full py-10 bg-gradient-to-br from-background via-white to-primary/10">
      <PageContainer className="flex flex-col gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold text-text">👤 My Profile</h1>
            <p className="text-gray-500 font-medium">
              Everything about your wellness, in one place.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Your profile helps FemCare personalize your wellness experience
              while keeping your information private and secure. You stay in
              control of your data at every step.
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <img
              src={profileWatercolor}
              alt="Watercolor illustration representing a personal wellness profile"
              className="w-full max-w-xs h-auto"
            />
          </div>
        </div>

        <PersonalInfoCard />
        <CyclePreferencesCard />
        <LifestyleCard />
        <PrivacyCard />

        <div className="flex justify-center">
          <PrimaryButton className="px-12 py-4 text-lg">
            Save Changes
          </PrimaryButton>
        </div>
      </PageContainer>
    </section>
  );
};

export default ProfilePage;