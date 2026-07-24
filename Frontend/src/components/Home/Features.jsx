import { motion } from "framer-motion";
import {
  BrainCircuit,
  Route,
  BusFront,
  MapPinned,
  BellRing,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Prediction",
    description:
      "Predict traffic congestion and travel time using Machine Learning.",
    color: "text-cyan-400",
    glow: "shadow-cyan-500/20",
  },
  {
    icon: Route,
    title: "Smart Route Optimization",
    description:
      "Automatically find the fastest and most efficient bus routes.",
    color: "text-blue-400",
    glow: "shadow-blue-500/20",
  },
  {
    icon: BusFront,
    title: "Live Bus Tracking",
    description:
      "Track buses in real time with AI-powered monitoring.",
    color: "text-indigo-400",
    glow: "shadow-indigo-500/20",
  },
  {
    icon: MapPinned,
    title: "Interactive Maps",
    description:
      "Visualize routes and stops on an interactive map.",
    color: "text-cyan-400",
    glow: "shadow-cyan-500/20",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Analyze traffic, passenger flow, and congestion using AI.",
    color: "text-blue-400",
    glow: "shadow-blue-500/20",
  },
  {
    icon: BellRing,
    title: "Smart Alerts",
    description:
      "Receive instant notifications for delays, route changes, and emergencies.",
    color: "text-indigo-400",
    glow: "shadow-indigo-500/20",
  },
];

function Features() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Animated Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500 blur-[170px]"
      />

      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-indigo-600 blur-[170px]"
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

            Why Choose{" "}

            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              TransitInsight AI
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">

            Our AI-powered platform transforms public transportation
            through intelligent routing, live tracking,
            predictive analytics, and real-time insights.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20"
              >

                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900/80 backdrop-blur-lg shadow-xl ${feature.glow}`}
                >

                  <Icon
                    size={34}
                    className={`${feature.color} transition duration-300 group-hover:scale-125 group-hover:rotate-6`}
                  />

                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">

                  {feature.title}

                </h3>

                <p className="leading-8 text-slate-300">

                  {feature.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Features;
