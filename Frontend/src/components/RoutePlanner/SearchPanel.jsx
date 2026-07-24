import { useState } from "react";
import {
  ArrowDownUp,
  CalendarDays,
  Clock3,
  MapPin,
  Search,
} from "lucide-react";

function SearchPanel({ onSearch }) {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSwap = () => {
    setFormData((previousData) => ({
      ...previousData,
      from: previousData.to,
      to: previousData.from,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.from.trim() || !formData.to.trim()) {
      alert("Please enter both starting point and destination.");
      return;
    }

    onSearch(formData);
  };

  return (
    <section className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 md:p-8">
      <div>
        <p className="text-sm font-semibold text-cyan-400">
          AI-powered journey planning
        </p>

        <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Plan Your Route
        </h1>

        <p className="mt-3 max-w-2xl leading-7 text-slate-400">
          Enter your starting point and destination to find fast, affordable,
          and low-traffic public transport routes.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 grid gap-4 xl:grid-cols-[1fr_auto_1fr_180px_160px_auto]"
      >
        <div className="relative">
          <MapPin
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
          />

          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
            placeholder="Starting location"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3.5 pl-11 pr-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"
          />
        </div>

        <button
          type="button"
          onClick={handleSwap}
          aria-label="Swap locations"
          className="flex items-center justify-center rounded-xl border border-slate-700 bg-slate-950 px-4 text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
        >
          <ArrowDownUp size={19} />
        </button>

        <div className="relative">
          <MapPin
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400"
          />

          <input
            type="text"
            name="to"
            value={formData.to}
            onChange={handleChange}
            placeholder="Destination"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3.5 pl-11 pr-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"
          />
        </div>

        <div className="relative">
          <CalendarDays
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3.5 pl-11 pr-4 text-sm text-white outline-none focus:border-cyan-500"
          />
        </div>

        <div className="relative">
          <Clock3
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3.5 pl-11 pr-4 text-sm text-white outline-none focus:border-cyan-500"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 font-semibold text-white transition hover:bg-cyan-400"
        >
          <Search size={18} />
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchPanel;
