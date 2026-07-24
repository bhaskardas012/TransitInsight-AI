import { motion } from "framer-motion";
import {
  CloudSun,
  Droplets,
  Wind,
} from "lucide-react";

function WeatherWidget() {
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
            Current Weather
          </p>

          <h2 className="mt-1 text-xl font-bold text-white">
            Murshidabad
          </h2>
        </div>

        <CloudSun size={34} className="text-amber-300" />
      </div>

      <div className="mt-8">
        <p className="text-5xl font-bold text-white">
          29°C
        </p>

        <p className="mt-2 text-slate-400">
          Partly cloudy
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-slate-950/60 p-4">
          <Droplets size={20} className="text-blue-400" />

          <p className="mt-3 text-xs text-slate-400">
            Humidity
          </p>

          <p className="mt-1 font-semibold text-white">
            68%
          </p>
        </div>

        <div className="rounded-2xl bg-slate-950/60 p-4">
          <Wind size={20} className="text-cyan-400" />

          <p className="mt-3 text-xs text-slate-400">
            Wind
          </p>

          <p className="mt-1 font-semibold text-white">
            12 km/h
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default WeatherWidget;
