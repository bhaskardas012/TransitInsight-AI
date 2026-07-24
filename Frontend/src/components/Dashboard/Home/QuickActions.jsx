import { motion } from "framer-motion";
import {
  Route,
  MapPinned,
  BusFront,
  FileText,
} from "lucide-react";

const actions = [
  {
    title: "Plan Route",
    icon: Route,
  },
  {
    title: "Live Traffic",
    icon: MapPinned,
  },
  {
    title: "Track Bus",
    icon: BusFront,
  },
  {
    title: "View Reports",
    icon: FileText,
  },
];

function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl"
    >
      <div>
        <p className="text-sm font-medium text-cyan-400">
          Useful Tools
        </p>

        <h2 className="mt-1 text-xl font-bold text-white">
          Quick Actions
        </h2>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              type="button"
              className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-left transition hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-cyan-500/5"
            >
              <div className="inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-400 transition group-hover:bg-cyan-500 group-hover:text-white">
                <Icon size={22} />
              </div>

              <p className="mt-3 text-sm font-semibold text-white">
                {action.title}
              </p>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

export default QuickActions;
