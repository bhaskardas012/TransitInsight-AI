import { useMemo, useState } from "react";
import {
  ArrowRight,
  Bookmark,
  BusFront,
  Clock3,
  Footprints,
  MapPin,
  Navigation,
  Search,
  Trash2,
} from "lucide-react";

import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import { useUserData } from "../../../context/UserDataContext";

function SavedRoutes() {
  const {
    savedRoutes,
    removeSavedRoute,
  } = useUserData();

  const [search, setSearch] = useState("");

  const filteredRoutes = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    if (!searchText) {
      return savedRoutes;
    }

    return savedRoutes.filter((route) => {
      return [
        route.name,
        route.from,
        route.to,
        route.busNumber,
        route.busType,
        route.traffic,
      ]
        .filter(Boolean)
        .some((value) =>
          value.toLowerCase().includes(searchText)
        );
    });
  }, [savedRoutes, search]);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <section className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                <Bookmark size={18} />
                Personal route collection
              </div>

              <h1 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                My Saved Routes
              </h1>

              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                View and manage the routes you saved from the route planner.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-4">
              <p className="text-sm text-slate-400">
                Total saved routes
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {savedRoutes.length}
              </p>
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-medium text-cyan-400">
                Your routes
              </p>

              <h2 className="mt-1 text-2xl font-bold text-white">
                Saved Route List
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
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search saved routes"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"
              />
            </div>
          </div>

          {filteredRoutes.length === 0 ? (
            <EmptyState hasSavedRoutes={savedRoutes.length > 0} />
          ) : (
            <div className="mt-6 grid gap-6 xl:grid-cols-2">
              {filteredRoutes.map((route) => (
                <SavedRouteCard
                  key={route.id}
                  route={route}
                  onRemove={removeSavedRoute}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </DashboardLayout>
  );
}

function SavedRouteCard({ route, onRemove }) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6 transition hover:-translate-y-1 hover:border-cyan-500/40">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-bold text-white">
              {route.name || "Saved Route"}
            </h3>

            {route.busType && (
              <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300">
                {route.busType}
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
          onClick={() => onRemove(route.id)}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-500/30 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/10"
        >
          <Trash2 size={16} />
          Remove
        </button>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <RouteInfo
          icon={Clock3}
          label="Travel time"
          value={route.durationText || `${route.duration ?? "-"} min`}
        />

        <RouteInfo
          icon={Navigation}
          label="Distance"
          value={route.distanceText || `${route.distance ?? "-"} km`}
        />

        <RouteInfo
          icon={BusFront}
          label="Fare"
          value={route.fareText || `₹${route.fare ?? "-"}`}
        />

        <RouteInfo
          icon={Footprints}
          label="Walking"
          value={route.walkingText || `${route.walking ?? "-"} min`}
        />
      </div>

      <div className="mt-6 rounded-2xl bg-slate-900 p-5">
        <p className="text-xs uppercase tracking-wide text-slate-500">
          Route details
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          {route.details || "No route details available."}
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {route.busNumber && (
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
              Bus: {route.busNumber}
            </span>
          )}

          {route.traffic && (
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              Traffic: {route.traffic}
            </span>
          )}

          {route.savedAt && (
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
              Saved {formatDate(route.savedAt)}
            </span>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-400"
        >
          View Route
          <ArrowRight size={17} />
        </button>
      </div>
    </article>
  );
}

function RouteInfo({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="rounded-xl bg-slate-900 p-4">
      <Icon size={19} className="text-cyan-400" />

      <p className="mt-3 text-xs text-slate-500">
        {label}
      </p>

      <p className="mt-1 font-semibold text-white">
        {value}
      </p>
    </div>
  );
}

function EmptyState({ hasSavedRoutes }) {
  return (
    <div className="mt-6 rounded-2xl border border-dashed border-slate-700 p-12 text-center">
      <Bookmark
        size={42}
        className="mx-auto text-slate-600"
      />

      <h3 className="mt-4 font-semibold text-white">
        {hasSavedRoutes
          ? "No matching saved routes"
          : "No saved routes yet"}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {hasSavedRoutes
          ? "Try searching with another route, bus, or location name."
          : "Save a route from the Route Planner and it will appear here."}
      </p>
    </div>
  );
}

function formatDate(dateValue) {
  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return "recently";
  }

  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default SavedRoutes;
