import {
  ArrowRight,
  CalendarDays,
  Clock3,
  History,
  MapPin,
  Trash2,
} from "lucide-react";

function RecentRoutes({
  routes = [],
  onSelectRoute,
  onClearHistory,
}) {
  const hasRoutes = routes.length > 0;

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
            <History size={22} />
          </div>

          <div>
            <p className="text-sm font-medium text-cyan-400">
              Your search history
            </p>

            <h2 className="mt-1 text-2xl font-bold text-white">
              Recent Routes
            </h2>
          </div>
        </div>

        {hasRoutes && (
          <button
            type="button"
            onClick={onClearHistory}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-500/30 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/10"
          >
            <Trash2 size={16} />
            Clear History
          </button>
        )}
      </div>

      {!hasRoutes ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-700 p-10 text-center">
          <History
            size={40}
            className="mx-auto text-slate-600"
          />

          <h3 className="mt-4 font-semibold text-white">
            No recent routes
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Routes searched by the current user will appear here.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {routes.map((route) => (
            <article
              key={route.id}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition hover:-translate-y-1 hover:border-cyan-500/40"
            >
              <button
                type="button"
                onClick={() => onSelectRoute(route)}
                className="w-full text-left"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-emerald-500/10 p-2.5 text-emerald-400">
                    <MapPin size={18} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-200">
                      <span className="break-words">
                        {route.from}
                      </span>

                      <ArrowRight
                        size={15}
                        className="shrink-0 text-slate-500"
                      />

                      <span className="break-words">
                        {route.to}
                      </span>
                    </div>

                    <div className="mt-4 space-y-2 text-xs text-slate-500">
                      {route.date && (
                        <div className="flex items-center gap-2">
                          <CalendarDays size={14} />
                          <span>{formatTravelDate(route.date)}</span>
                        </div>
                      )}

                      {route.time && (
                        <div className="flex items-center gap-2">
                          <Clock3 size={14} />
                          <span>{formatTravelTime(route.time)}</span>
                        </div>
                      )}

                      {route.searchedAt && (
                        <div className="flex items-center gap-2">
                          <History size={14} />
                          <span>
                            Searched {formatSearchDate(route.searchedAt)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">
                  <span className="text-xs text-slate-500">
                    Click to search again
                  </span>

                  <ArrowRight
                    size={17}
                    className="text-cyan-400"
                  />
                </div>
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function formatSearchDate(dateValue) {
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

function formatTravelDate(dateValue) {
  const date = new Date(`${dateValue}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return dateValue;
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatTravelTime(timeValue) {
  const [hours, minutes] = timeValue.split(":");

  if (hours === undefined || minutes === undefined) {
    return timeValue;
  }

  const date = new Date();
  date.setHours(Number(hours), Number(minutes), 0, 0);

  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default RecentRoutes;
