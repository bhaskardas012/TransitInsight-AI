import { motion } from "framer-motion";
import { Newspaper, ArrowRight } from "lucide-react";

const newsItems = [
  {
    title: "New bus route added",
    description: "Route B-24 is now active across the central city area.",
    time: "20 minutes ago",
  },
  {
    title: "Traffic update",
    description: "Moderate congestion reported near the main bus terminal.",
    time: "1 hour ago",
  },
  {
    title: "Service improvement",
    description: "Additional buses have been assigned during peak hours.",
    time: "3 hours ago",
  },
];

function LatestNews() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-400">
            Transport Updates
          </p>

          <h2 className="mt-1 text-xl font-bold text-white">
            Latest News
          </h2>
        </div>

        <div className="rounded-2xl bg-blue-500/10 p-3 text-blue-400">
          <Newspaper size={22} />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {newsItems.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
          >
            <h3 className="font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-400">
              {item.description}
            </p>

            <p className="mt-3 text-xs text-slate-500">
              {item.time}
            </p>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
      >
        View all updates
        <ArrowRight size={16} />
      </button>
    </motion.div>
  );
}

export default LatestNews;
