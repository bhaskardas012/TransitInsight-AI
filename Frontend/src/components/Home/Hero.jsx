import { motion } from "framer-motion";
import {
  BusFront,
  BrainCircuit,
  Route,
  MapPinned,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#1E3A8A]">

      {/* Animated Background */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -top-44 -left-44 h-[500px] w-[500px] rounded-full bg-cyan-500 blur-[170px]"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-[550px] w-[550px] rounded-full bg-indigo-600 blur-[180px]"
      />

      {/* Floating Icons */}

      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-32 left-20"
      >
        <BrainCircuit size={60} className="text-cyan-400/40" />
      </motion.div>

      <motion.div
        animate={{ y: [15, -15, 15] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-28 right-24"
      >
        <Route size={60} className="text-purple-400/40" />
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-24 left-24"
      >
        <MapPinned size={60} className="text-blue-400/40" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="mb-8 flex items-center gap-3 rounded-full border border-cyan-400/30 bg-white/10 px-6 py-3 backdrop-blur-xl"
        >
          <Sparkles className="text-cyan-400" />
          <span className="text-cyan-300">
            AI Powered Smart Transportation
          </span>
        </motion.div>

        {/* Main Icon */}

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: .8 }}
          className="mb-8"
        >
          <div className="flex h-40 w-40 items-center justify-center rounded-full border border-cyan-400/30 bg-white/10 backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,.35)]">

            <BusFront
              size={90}
              className="text-cyan-300"
            />

          </div>
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity:0,y:40 }}
          animate={{ opacity:1,y:0 }}
          transition={{ delay:.2 }}
          className="text-center text-6xl font-black text-white md:text-8xl"
        >
          TransitInsight

          <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">

            Artificial Intelligence

          </span>
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:.4 }}
          className="mt-8 max-w-3xl text-center text-xl leading-9 text-slate-300"
        >
          Experience the next generation of intelligent public transport.
          Optimize bus routes, predict delays, monitor live vehicles,
          and improve passenger experiences through Artificial Intelligence.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity:0,y:30 }}
          animate={{ opacity:1,y:0 }}
          transition={{ delay:.6 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >

          <button className="group flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-white transition duration-300 hover:scale-110 hover:bg-cyan-400">

            Get Started

            <ArrowRight className="transition group-hover:translate-x-2" />

          </button>

          <button className="rounded-xl border border-cyan-400/50 bg-white/5 px-8 py-4 font-bold text-cyan-300 backdrop-blur-xl transition hover:border-cyan-300 hover:bg-cyan-400/10">

            Live Bus Tracking

          </button>

        </motion.div>

        {/* Feature Cards */}

        <motion.div
          initial={{ opacity:0,y:40 }}
          animate={{ opacity:1,y:0 }}
          transition={{ delay:.8 }}
          className="mt-20 grid gap-6 md:grid-cols-3"
        >

          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <BrainCircuit className="mb-4 text-cyan-400" size={38}/>
            <h3 className="mb-2 text-xl font-bold text-white">
              AI Prediction
            </h3>
            <p className="text-slate-300">
              Machine learning predicts traffic and arrival times.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <Route className="mb-4 text-purple-400" size={38}/>
            <h3 className="mb-2 text-xl font-bold text-white">
              Smart Routing
            </h3>
            <p className="text-slate-300">
              Dynamic route optimization for faster travel.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <ShieldCheck className="mb-4 text-emerald-400" size={38}/>
            <h3 className="mb-2 text-xl font-bold text-white">
              Safe Journey
            </h3>
            <p className="text-slate-300">
              Real-time monitoring ensures reliable transportation.
            </p>
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;
