import { motion } from "framer-motion";
import {
  BusFront,
  Route,
  Users,
  BrainCircuit,
} from "lucide-react";

const stats = [
  {
    icon: BusFront,
    number: "500+",
    title: "Active Buses",
    color: "text-cyan-400",
    glow: "shadow-cyan-500/20",
  },
  {
    icon: Route,
    number: "1,250+",
    title: "Optimized Routes",
    color: "text-blue-400",
    glow: "shadow-blue-500/20",
  },
  {
    icon: Users,
    number: "75K+",
    title: "Daily Passengers",
    color: "text-indigo-400",
    glow: "shadow-indigo-500/20",
  },
  {
    icon: BrainCircuit,
    number: "98%",
    title: "AI Prediction Accuracy",
    color: "text-cyan-400",
    glow: "shadow-cyan-500/20",
  },
];

function Statistics() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Animated Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500 blur-[170px]"
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
        className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-indigo-600 blur-[170px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-extrabold text-white md:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Empowering smarter public transportation with Artificial
            Intelligence, predictive analytics, and intelligent route
            optimization.
          </p>
        </motion.div>

        {/* Statistics Cards */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                }}
                className="group rounded-3xl border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20"
              >

                <div
                  className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900/80 shadow-xl ${stat.glow}`}
                >
                  <Icon
                    size={36}
                    className={`${stat.color} transition duration-300 group-hover:scale-125 group-hover:rotate-6`}
                  />
                </div>

                <h3 className="text-5xl font-extrabold text-white">
                  {stat.number}
                </h3>

                <p className="mt-4 text-lg text-slate-300">
                  {stat.title}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Statistics;
