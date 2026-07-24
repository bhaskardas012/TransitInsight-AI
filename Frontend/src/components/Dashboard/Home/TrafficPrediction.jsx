import { motion } from "framer-motion";
import {
  BrainCircuit,
  Clock3,
  TriangleAlert,
} from "lucide-react";

function TrafficPrediction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-400">
            AI Prediction
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            Traffic Prediction
          </h2>
        </div>

        <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-400">
          <BrainCircuit size={26} />
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
        <div className="flex items-center gap-3">
          <TriangleAlert className="text-amber-400" size={24} />

          <div>
            <h3 className="font-semibold text-white">
              Moderate congestion expected
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Central Road and Station Road may experience delays.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-slate-950/60 p-5">
          <p className="text-sm text-slate-400">
            Estimated Delay
          </p>

          <div className="mt-2 flex items-center gap-2 text-white">
            <Clock3 size={20} className="text-cyan-400" />
            <span className="text-2xl font-bold">18 min</span>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-950/60 p-5">
          <p className="text-sm text-slate-400">
            Prediction Accuracy
          </p>

          <p className="mt-2 text-2xl font-bold text-white">
            91%
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default TrafficPrediction;
