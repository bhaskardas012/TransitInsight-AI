import { motion } from "framer-motion";
import { ArrowRight, BusFront } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useUserData } from "../../../context/UserDataContext";

function WelcomeCard() {
  const navigate = useNavigate();
  const { user } = useUserData();

  const displayName =
    user.name?.trim() || "User";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-indigo-600/20 p-8 shadow-xl"
    >
      <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            <BusFront size={18} />
            TransitInsight AI
          </div>

          <h1 className="mt-6 text-3xl font-bold text-white md:text-4xl">
            Welcome back, {displayName}
          </h1>

          <p className="mt-3 max-w-2xl leading-7 text-slate-300">
            Review your routes, notifications, reports,
            and recent transport activity.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/route-planner")}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400"
        >
          Plan a Route
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}

export default WelcomeCard;
