import DashboardLayout from "../../../components/Dashboard/DashboardLayout";

import WelcomeCard from "../../../components/Dashboard/Home/WelcomeCard";
import StatsGrid from "../../../components/Dashboard/Home/StatsGrid";
import TrafficPrediction from "../../../components/Dashboard/Home/TrafficPrediction";
import AnalyticsChart from "../../../components/Dashboard/Home/AnalyticsChart";
import QuickActions from "../../../components/Dashboard/Home/QuickActions";
import RecentActivity from "../../../components/Dashboard/Home/RecentActivity";
import WeatherWidget from "../../../components/Dashboard/Home/WeatherWidget";
import LatestNews from "../../../components/Dashboard/Home/LatestNews";

function Dashboard() {
  return (
    <DashboardLayout>
      <WelcomeCard />

      <StatsGrid />

      <div className="mt-8 grid gap-8 xl:grid-cols-2">
        <TrafficPrediction />
        <AnalyticsChart />
      </div>

      <div className="mt-8 grid gap-8 xl:grid-cols-3">
        <QuickActions />
        <WeatherWidget />
        <LatestNews />
      </div>

      <div className="mt-8">
        <RecentActivity />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
