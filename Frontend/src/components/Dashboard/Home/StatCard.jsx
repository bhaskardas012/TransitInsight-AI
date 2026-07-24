import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

function StatCard({
  title,
  value,
  description,
  icon: Icon,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h3>
        </div>

        <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-400">
          {Icon && <Icon size={24} />}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 text-sm">
        <TrendingUp size={17} className="text-emerald-400" />

        <span className="text-emerald-400">
          {description}
        </span>
      </div>
    </motion.div>
  );
}

export default StatCard;
