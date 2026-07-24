import { Route } from "lucide-react";
import RouteCard from "./RouteCard";

function RouteResults({ routes, hasSearched }) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-400">
            Available journeys
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            Route Results
          </h2>
        </div>

        <Route size={25} className="text-cyan-400" />
      </div>

      {!hasSearched && (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-700 p-12 text-center">
          <Route size={42} className="mx-auto text-slate-600" />

          <h3 className="mt-4 font-semibold text-white">
            Search for a route
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Enter your starting point and destination to see available routes.
          </p>
        </div>
      )}

      {hasSearched && routes.length > 0 && (
        <div className="mt-6 space-y-5">
          {routes.map((route, index) => (
            <RouteCard
              key={route.id}
              route={route}
              isRecommended={index === 0}
            />
          ))}
        </div>
      )}

      {hasSearched && routes.length === 0 && (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-700 p-12 text-center">
          <p className="font-semibold text-white">
            No matching routes found
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Change the locations or route preferences and search again.
          </p>
        </div>
      )}
    </section>
  );
}

export default RouteResults;
