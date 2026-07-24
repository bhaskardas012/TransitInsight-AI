import { motion } from "framer-motion";
import { BrainCircuit, BusFront, Route, ShieldCheck } from "lucide-react";

function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#1E3A8A] px-6">

      {/* Animated Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500 blur-[180px]"
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

      {/* Floating Icons */}

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-20 top-28 text-cyan-400 opacity-20"
      >
        <BusFront size={80} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-20 top-40 text-blue-400 opacity-20"
      >
        <BrainCircuit size={90} />
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-24 left-24 text-cyan-400 opacity-20"
      >
        <Route size={70} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-24 right-24 text-indigo-400 opacity-20"
      >
        <ShieldCheck size={70} />
      </motion.div>

      {/* Glass Card */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-xl shadow-2xl"
      >
        {/* Logo */}

        <div className="mb-8 text-center">

          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10">

            <BusFront className="text-cyan-400" size={42} />

          </div>

          <h1 className="text-4xl font-extrabold text-white">
            {title}
          </h1>

          <p className="mt-3 text-slate-300">
            {subtitle}
          </p>

        </div>

        {children}

      </motion.div>

    </div>
  );
}

export default AuthLayout;
