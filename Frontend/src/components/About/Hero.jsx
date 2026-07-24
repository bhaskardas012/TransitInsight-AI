import { motion } from "framer-motion";
import { Users, BrainCircuit } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-5 py-2 text-cyan-300">
            <Users size={18} />
            About TransitInsight AI
          </div>

          <h1 className="text-5xl font-bold text-white md:text-6xl">
            Building the Future of
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              Smart Transportation
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            TransitInsight AI is an AI-powered public transportation platform
            designed to help passengers, transport authorities, and city
            administrators make better decisions through intelligent analytics,
            real-time tracking, and smart route optimization.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-white/5 px-6 py-4 backdrop-blur-md">
              <BrainCircuit className="text-cyan-400" size={28} />
              <div className="text-left">
                <h3 className="font-semibold text-white">
                  AI Powered Platform
                </h3>
                <p className="text-sm text-slate-400">
                  Predict • Analyze • Optimize
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
