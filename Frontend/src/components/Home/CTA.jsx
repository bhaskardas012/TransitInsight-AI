import { motion } from "framer-motion";
import {
  ArrowRight,
  BusFront,
  Sparkles,
} from "lucide-react";

function CTA() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Animated Background */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500 blur-[180px]"
      />

      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-600 blur-[180px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="rounded-[40px] border border-cyan-500/20 bg-white/5 p-14 backdrop-blur-xl text-center"
        >

          <div className="mb-8 flex justify-center">

            <div className="rounded-full bg-cyan-500/10 p-6">

              <Sparkles
                size={60}
                className="text-cyan-400"
              />

            </div>

          </div>

          <h2 className="text-5xl font-extrabold text-white md:text-6xl">

            Ready to Experience

            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">

              Smart Transportation?

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">

            Discover how Artificial Intelligence can improve public
            transportation through intelligent route optimization,
            real-time tracking, and predictive analytics.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <button className="flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-600">

              <BusFront size={22} />

              Get Started

              <ArrowRight size={20} />

            </button>

            <button className="rounded-xl border border-cyan-400 px-8 py-4 font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-500 hover:text-white">

              Explore Dashboard

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default CTA;
