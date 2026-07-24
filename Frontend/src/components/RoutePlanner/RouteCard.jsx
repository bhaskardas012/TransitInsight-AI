import { useState } from "react";
import {
  ArrowRight,
  Bookmark,
  BusFront,
  Clock3,
  Footprints,
  MapPin,
  Navigation,
} from "lucide-react";

import { useUserData } from "../../context/UserDataContext";

function RouteCard({ route, isRecommended }) {
  const { saveRoute } = useUserData();

  const [message, setMessage] = useState("");

  const handleSaveRoute = () => {
    const saved = saveRoute(route);

    if (saved) {
      setMessage("✅ Route saved successfully.");
    } else {
      setMessage("ℹ️ This route is already saved.");
    }

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  return (
    <article
      className={`rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 ${
        isRecommended
          ? "border-cyan-500/50 bg-cyan-500/5"
          : "border-slate-800 bg-slate-950/60"
      }`}
    >
      {/* Header */}

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-bold text-white">
              {route.name}
            </h3>

            {isRecommended && (
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                AI Recommended
              </span>
            )}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <MapPin size={16} className="text-emerald-400" />

            <span>{route.from}</span>

            <ArrowRight size={15} />

            <span>{route.to}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSaveRoute}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
        >
          <Bookmark size={17} />
          Save Route
        </button>
      </div>

      {message && (
        <p className="mt-4 text-sm font-medium text-cyan-300">
          {message}
        </p>
      )}

      {/* Route Statistics */}

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <RouteInformation
          icon={Clock3}
          label="Travel Time"
          value={route.durationText}
        />

        <RouteInformation
          icon={Navigation}
          label="Distance"
          value={route.distanceText}
        />

        <RouteInformation
          icon={BusFront}
          label="Fare"
          value={route.fareText}
        />

        <RouteInformation
          icon={Footprints}
          label="Walking"
          value={route.walkingText}
        />
      </div>

      {/* Route Details */}

      <div className="mt-6 rounded-xl bg-slate-900 p-5">
        <p className="text-xs uppercase tracking-wider text-slate-500">
          Route Details
        </p>

        <p className="mt-2 text-sm text-slate-300">
          {route.details}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
            🚌 {route.busNumber}
          </span>

          <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
            {route.busType}
          </span>

          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
            Traffic: {route.traffic}
          </span>
        </div>
      </div>

      {/* Footer */}

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 font-semibold text-white transition hover:bg-cyan-400"
        >
          View Route

          <ArrowRight size={18} />
        </button>
      </div>
    </article>
  );
}

function RouteInformation({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl bg-slate-900 p-4">
      <Icon size={20} className="text-cyan-400" />

      <p className="mt-3 text-xs uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-lg font-semibold text-white">
        {value}
      </p>
    </div>
  );
}

export default RouteCard;
