import { useMemo } from "react";
import {
  BarChart3,
  Bookmark,
  FileText,
  Route,
  TrendingUp,
} from "lucide-react";

import { useUserData } from "../../../context/UserDataContext";

function AnalyticsChart() {
  const {
    routeHistory,
    savedRoutes,
    reports,
    activities,
  } = useUserData();

  const analytics = useMemo(() => {
    const days = getLastSevenDays();

    return days.map((day) => {
      const routeSearches = routeHistory.filter((route) =>
        isSameDay(route.searchedAt, day.date)
      ).length;

      const savedRouteCount = savedRoutes.filter((route) =>
        isSameDay(route.savedAt, day.date)
      ).length;

      const reportCount = reports.filter((report) =>
        isSameDay(report.createdAt, day.date)
      ).length;

      const activityCount = activities.filter((activity) =>
        isSameDay(activity.createdAt, day.date)
      ).length;

      return {
        label: day.label,
        routeSearches,
        savedRoutes: savedRouteCount,
        reports: reportCount,
        activityCount,
        total:
          routeSearches +
          savedRouteCount +
          reportCount +
          activityCount,
      };
    });
  }, [routeHistory, savedRoutes, reports, activities]);

  const highestValue = Math.max(
    ...analytics.map((item) => item.total),
    1
  );

  const totalActivity = analytics.reduce(
    (total, item) => total + item.total,
    0
  );

  const previousActivity = analytics
    .slice(0, 3)
    .reduce((total, item) => total + item.total, 0);

  const recentActivity = analytics
    .slice(4)
    .reduce((total, item) => total + item.total, 0);

  const changePercentage =
    previousActivity === 0
      ? recentActivity > 0
        ? 100
        : 0
      : Math.round(
          ((recentActivity - previousActivity) /
            previousActivity) *
            100
        );

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
        <div>
          <p className="text-sm font-medium text-cyan-400">
            Your activity
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            Weekly Analytics
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Based on your route searches, saved routes, reports,
            and recent account activity.
          </p>
        </div>

        <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-400">
          <BarChart3 size={25} />
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AnalyticsSummary
          icon={Route}
          label="Route searches"
          value={routeHistory.length}
        />

        <AnalyticsSummary
          icon={Bookmark}
          label="Saved routes"
          value={savedRoutes.length}
        />

        <AnalyticsSummary
          icon={FileText}
          label="Reports"
          value={reports.length}
        />

        <AnalyticsSummary
          icon={TrendingUp}
          label="Total activity"
          value={activities.length}
        />
      </div>

      <div className="mt-8">
        {totalActivity === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-700 p-12 text-center">
            <BarChart3
              size={42}
              className="mx-auto text-slate-600"
            />

            <h3 className="mt-4 font-semibold text-white">
              No analytics available yet
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Search for routes, save routes, or generate reports
              to create your weekly activity chart.
            </p>
          </div>
        ) : (
          <>
            <div className="flex h-64 items-end justify-between gap-3">
              {analytics.map((item) => {
                const height =
                  item.total === 0
                    ? 4
                    : Math.max(
                        (item.total / highestValue) * 100,
                        12
                      );

                return (
                  <div
                    key={item.label}
                    className="flex h-full flex-1 flex-col items-center justify-end gap-3"
                  >
                    <div className="group relative flex h-full w-full items-end justify-center">
                      <div
                        style={{ height: `${height}%` }}
                        className="w-full max-w-10 rounded-t-xl bg-gradient-to-t from-cyan-600 to-blue-400 transition duration-300 group-hover:opacity-80"
                      />

                      <div className="pointer-events-none absolute bottom-full mb-2 hidden min-w-36 rounded-xl border border-slate-700 bg-slate-950 p-3 text-xs text-slate-300 shadow-xl group-hover:block">
                        <p className="font-semibold text-white">
                          {item.label}
                        </p>

                        <p className="mt-2">
                          Searches: {item.routeSearches}
                        </p>

                        <p>
                          Saved: {item.savedRoutes}
                        </p>

                        <p>
                          Reports: {item.reports}
                        </p>

                        <p>
                          Activities: {item.activityCount}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs text-slate-500">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col justify-between gap-4 border-t border-slate-800 pt-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm text-slate-400">
                  Activity during the last 7 days
                </p>

                <p className="mt-1 text-2xl font-bold text-white">
                  {totalActivity}
                </p>
              </div>

              <div
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                  changePercentage >= 0
                    ? "bg-emerald-500/10 text-emerald-300"
                    : "bg-red-500/10 text-red-300"
                }`}
              >
                <TrendingUp
                  size={17}
                  className={
                    changePercentage < 0
                      ? "rotate-180"
                      : ""
                  }
                />

                {changePercentage >= 0 ? "+" : ""}
                {changePercentage}% recent change
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function AnalyticsSummary({
  icon: Icon,
  label,
  value,
}) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-cyan-500/10 p-2.5 text-cyan-400">
          <Icon size={19} />
        </div>

        <div>
          <p className="text-xs text-slate-500">
            {label}
          </p>

          <p className="mt-1 text-xl font-bold text-white">
            {value}
          </p>
        </div>
      </div>
    </article>
  );
}

function getLastSevenDays() {
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - (6 - index));

    return {
      date,
      label: date.toLocaleDateString("en-US", {
        weekday: "short",
      }),
    };
  });
}

function isSameDay(dateValue, targetDate) {
  if (!dateValue) {
    return false;
  }

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return false;
  }

  return (
    date.getFullYear() === targetDate.getFullYear() &&
    date.getMonth() === targetDate.getMonth() &&
    date.getDate() === targetDate.getDate()
  );
}

export default AnalyticsChart;
