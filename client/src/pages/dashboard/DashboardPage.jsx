import { Droplet, Sparkles, Smile, Shield, Apple, Heart, AlertTriangle, Activity } from "lucide-react";
import PageContainer from "../../components/layout/PageContainer.jsx";
import Card from "../../components/ui/Card.jsx";
import Sidebar from "../../components/dashboard/Sidebar.jsx";
import OverviewCard from "../../components/dashboard/OverviewCard.jsx";
import QuickActionCard from "../../components/dashboard/QuickActionCard.jsx";

const overviewItems = [
  { icon: Droplet, iconBg: "bg-primary", label: "Next Period", value: "In 12 days" },
  { icon: Sparkles, iconBg: "bg-accent", label: "Wellness Tip", value: "Stay hydrated today" },
  { icon: Smile, iconBg: "bg-secondary", label: "Mood", value: "Feeling good" },
  { icon: Shield, iconBg: "bg-lavender", label: "Privacy", value: "Fully protected" },
];

const quickActions = [
  { icon: Droplet, iconBg: "bg-primary", label: "Track Cycle" },
  { icon: Apple, iconBg: "bg-success", label: "Nutrition" },
  { icon: Heart, iconBg: "bg-secondary", label: "Wellness" },
  { icon: AlertTriangle, iconBg: "bg-accent", label: "Emergency" },
];

const recentActivity = [
  { label: "Logged cycle day 3", time: "2 hours ago" },
  { label: "Completed a wellness check-in", time: "Yesterday" },
  { label: "Updated nutrition log", time: "2 days ago" },
  { label: "Reviewed privacy settings", time: "4 days ago" },
];

const DashboardPage = () => {
  return (
    <section className="w-full py-10">
      <PageContainer className="flex flex-col lg:flex-row gap-8 items-start">
        <Sidebar />

        <div className="flex-1 w-full flex flex-col gap-8">
          <div>

            <p className="text-gray-500">

                Welcome back,

            </p>

            <h1>

                Good Morning, Avni 🌸

            </h1>

        </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewItems.map((item) => (
              <OverviewCard
                key={item.label}
                icon={item.icon}
                iconBg={item.iconBg}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-text">Quick Actions</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action) => (
                <QuickActionCard
                  key={action.label}
                  icon={action.icon}
                  iconBg={action.iconBg}
                  label={action.label}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-text">Recent Activity</h2>
            <Card className="flex flex-col gap-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={activity.label}
                  className={`flex items-center gap-3 ${
                    index !== recentActivity.length - 1
                      ? "pb-4 border-b border-gray-100"
                      : ""
                  }`}
                >
                  <div className="w-9 h-9 rounded-full flex items-center justify-center bg-primary/40">
                    <Activity className="w-4 h-4 text-text" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-text">{activity.label}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default DashboardPage;