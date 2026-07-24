import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

function CTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500 blur-[170px]"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-600 blur-[170px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        <div className="rounded-[40px] border border-cyan-500/20 bg-white/5 px-10 py-20 text-center backdrop-blur-xl">

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white md:text-6xl"
          >
            Ready to Transform
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Public Transportation?
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300"
          >
            Join TransitInsight AI and discover how Artificial Intelligence,
            Machine Learning, and real-time analytics can create smarter,
            safer, and more efficient public transportation.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
          >

            <Link
              to="/register"
              className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-3 rounded-2xl border border-cyan-400 px-8 py-4 text-lg font-semibold text-cyan-300 transition hover:bg-cyan-500 hover:text-white"
            >
              Contact Us
              <Mail size={20} />
            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default CTA;
