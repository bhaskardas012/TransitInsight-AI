import { useState } from "react";
import {
  AlertTriangle,
  BrainCircuit,
  CarFront,
  Clock3,
  MapPinned,
  RefreshCw,
  Route,
  Search,
  TrendingUp,
} from "lucide-react";

import DashboardLayout from "../../../components/Dashboard/DashboardLayout";

const trafficAreas = [
  {
    id: 1,
    location: "Station Road",
    level: "Heavy",
    delay: "24 min",
    speed: "12 km/h",
    description: "Heavy congestion near the railway station entrance.",
  },
  {
    id: 2,
    location: "Central Bus Terminal",
    level: "Moderate",
    delay: "12 min",
    speed: "26 km/h",
    description: "Moderate traffic caused by passenger and bus movement.",
  },
  {
    id: 3,
    location: "Hospital Road",
    level: "Low",
    delay: "4 min",
    speed: "41 km/h",
    description: "Traffic is moving normally with minor delays.",
  },
];

const getTrafficStyle = (level) => {
  switch (level) {
    case "Heavy":
      return "border-red-500/30 bg-red-500/10 text-red-300";

    case "Moderate":
      return "border-amber-500/30 bg-amber-500/10 text-amber-300";

    default:
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
  }
};

function Traffic() {
  const [search, setSearch] = useState("");
  const [lastUpdated, setLastUpdated] = useState("Just now");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const filteredTraffic = trafficAreas.filter((area) =>
    area.location.toLowerCase().includes(search.toLowerCase())
  );

  const handleRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setLastUpdated(new Date().toLocaleTimeString());
      setIsRefreshing(false);
    }, 800);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page heading */}
        <section className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                <CarFront size={17} />
                Live road conditions
              </div>

              <h1 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Live Traffic Monitoring
              </h1>

              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                Monitor congestion, expected delays, average speed, and
                AI-powered traffic recommendations.
              </p>
            </div>

            <button
              type="button"
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RefreshCw
                size={18}
                className={isRefreshing ? "animate-spin" : ""}
              />

              {isRefreshing ? "Refreshing..." : "Refresh traffic"}
            </button>
          </div>
        </section>

        {/* Summary cards */}
        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <TrafficStatCard
            title="Congested Areas"
            value="8"
            description="2 more than yesterday"
            icon={AlertTriangle}
          />

          <TrafficStatCard
            title="Average Speed"
            value="27 km/h"
            description="Across monitored roads"
            icon={TrendingUp}
          />

          <TrafficStatCard
            title="Average Delay"
            value="14 min"
            description="During current conditions"
            icon={Clock3}
          />

          <TrafficStatCard
            title="Active Alerts"
            value="16"
            description={`Updated ${lastUpdated}`}
            icon={MapPinned}
          />
        </section>

        <section className="grid gap-8 xl:grid-cols-3">
          {/* Traffic map */}
          <div className="xl:col-span-2">
            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
              <div className="flex flex-col justify-between gap-4 border-b border-slate-800 p-6 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm font-medium text-cyan-400">
                    Traffic overview
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-white">
                    Live Traffic Map
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3 text-xs font-semibold">
                  <span className="rounded-full bg-emerald-500/10 px-3 py-2 text-emerald-300">
                    Low
                  </span>

                  <span className="rounded-full bg-amber-500/10 px-3 py-2 text-amber-300">
                    Moderate
                  </span>

                  <span className="rounded-full bg-red-500/10 px-3 py-2 text-red-300">
                    Heavy
                  </span>
                </div>
              </div>

              <div className="relative flex min-h-[420px] items-center justify-center bg-slate-950 p-8">
                <div className="absolute left-[18%] top-[25%] h-4 w-4 rounded-full bg-red-500 shadow-lg shadow-red-500/40" />
                <div className="absolute left-[48%] top-[42%] h-4 w-4 rounded-full bg-amber-400 shadow-lg shadow-amber-400/40" />
                <div className="absolute bottom-[24%] right-[20%] h-4 w-4 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40" />

                <div className="text-center">
                  <MapPinned
                    size={58}
                    className="mx-auto text-cyan-400"
                  />

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    Interactive map area
                  </h3>

                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
                    A React Leaflet and OpenStreetMap traffic map will be added
                    here during map integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI prediction */}
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/10 to-slate-900 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-cyan-400">
                  Smart prediction
                </p>

                <h2 className="mt-1 text-2xl font-bold text-white">
                  AI Traffic Insight
                </h2>
              </div>

              <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-400">
                <BrainCircuit size={26} />
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle
                  size={22}
                  className="mt-0.5 shrink-0 text-amber-300"
                />

                <div>
                  <h3 className="font-semibold text-white">
                    Heavy congestion expected
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Traffic near Station Road may increase during the next
                    30 minutes.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-slate-950/60 p-5">
              <div className="flex items-center gap-3">
                <Route size={21} className="text-cyan-400" />

                <h3 className="font-semibold text-white">
                  Recommended alternative
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Use Hospital Road and National Highway 34 to reduce the
                estimated journey time by approximately 16 minutes.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-950/60 p-4">
                <p className="text-xs text-slate-500">Prediction accuracy</p>
                <p className="mt-2 text-2xl font-bold text-white">91%</p>
              </div>

              <div className="rounded-2xl bg-slate-950/60 p-4">
                <p className="text-xs text-slate-500">Estimated time saved</p>
                <p className="mt-2 text-2xl font-bold text-white">16 min</p>
              </div>
            </div>
          </div>
        </section>

        {/* Search and traffic list */}
        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-medium text-cyan-400">
                Monitored locations
              </p>

              <h2 className="mt-1 text-2xl font-bold text-white">
                Traffic Conditions
              </h2>
            </div>

            <div className="relative w-full md:max-w-sm">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search a road or location"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {filteredTraffic.map((area) => (
              <article
                key={area.id}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition hover:-translate-y-1 hover:border-cyan-500/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {area.location}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {area.description}
                    </p>
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${getTrafficStyle(
                      area.level
                    )}`}
                  >
                    {area.level}
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-900 p-3">
                    <p className="text-xs text-slate-500">Expected delay</p>
                    <p className="mt-1 font-semibold text-white">
                      {area.delay}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-900 p-3">
                    <p className="text-xs text-slate-500">Average speed</p>
                    <p className="mt-1 font-semibold text-white">
                      {area.speed}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredTraffic.length === 0 && (
            <div className="mt-6 rounded-2xl border border-dashed border-slate-700 p-10 text-center">
              <p className="font-medium text-white">No location found</p>

              <p className="mt-2 text-sm text-slate-400">
                Try searching with another road or area name.
              </p>
            </div>
          )}
        </section>
      </div>
    </DashboardLayout>
  );
}

function TrafficStatCard({
  title,
  value,
  description,
  icon: Icon,
}) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <p className="mt-2 text-3xl font-bold text-white">{value}</p>
        </div>

        <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-400">
          <Icon size={23} />
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500">{description}</p>
    </article>
  );
}

export default Traffic;
