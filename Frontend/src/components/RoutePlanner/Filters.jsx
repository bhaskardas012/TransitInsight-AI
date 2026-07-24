import { RotateCcw, SlidersHorizontal } from "lucide-react";

const filterOptions = [
  {
    key: "fastest",
    label: "Fastest route",
  },
  {
    key: "cheapest",
    label: "Lowest fare",
  },
  {
    key: "lessTraffic",
    label: "Less traffic",
  },
  {
    key: "lessWalking",
    label: "Less walking",
  },
  {
    key: "acBus",
    label: "AC bus",
  },
];

function Filters({ filters, setFilters }) {
  const handleFilterChange = (event) => {
    const { name, checked } = event.target;

    setFilters((previousFilters) => ({
      ...previousFilters,
      [name]: checked,
    }));
  };

  const resetFilters = () => {
    setFilters({
      fastest: true,
      cheapest: false,
      lessTraffic: false,
      lessWalking: false,
      acBus: false,
    });
  };

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-400">
            Preferences
          </p>

          <h2 className="mt-1 text-xl font-bold text-white">
            Route Filters
          </h2>
        </div>

        <SlidersHorizontal size={23} className="text-cyan-400" />
      </div>

      <div className="mt-6 space-y-3">
        {filterOptions.map((option) => (
          <label
            key={option.key}
            className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 transition hover:border-cyan-500/40"
          >
            <span className="text-sm font-medium text-slate-300">
              {option.label}
            </span>

            <input
              type="checkbox"
              name={option.key}
              checked={filters[option.key]}
              onChange={handleFilterChange}
              className="h-4 w-4 accent-cyan-500"
            />
          </label>
        ))}
      </div>

      <button
        type="button"
        onClick={resetFilters}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
      >
        <RotateCcw size={17} />
        Reset Filters
      </button>
    </section>
  );
}

export default Filters;
