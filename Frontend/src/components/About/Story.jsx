import { motion } from "framer-motion";
import {
  BusFront,
  BrainCircuit,
  Route,
  TrafficCone,
} from "lucide-react";

const cards = [
  {
    icon: BusFront,
    title: "Public Transport Challenges",
    description:
      "Urban transportation faces congestion, delays, overcrowding, and inefficient route planning that impact millions of commuters every day.",
    color: "text-cyan-400",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Solution",
    description:
      "TransitInsight AI combines Artificial Intelligence and Machine Learning to predict traffic, optimize routes, and improve travel decisions.",
    color: "text-blue-400",
  },
  {
    icon: Route,
    title: "Smart Route Planning",
    description:
      "Users receive intelligent route recommendations based on traffic conditions, travel time, and transport availability.",
    color: "text-indigo-400",
  },
  {
    icon: TrafficCone,
    title: "Future Vision",
    description:
      "Our long-term goal is to build a smarter, greener, and more efficient transportation ecosystem for everyone.",
    color: "text-cyan-300",
  },
];

function Story() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              OUR STORY
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
              Why We Built
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                TransitInsight AI
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              Every day, thousands of commuters lose valuable time due to
              traffic congestion, inefficient route planning, and outdated
              transportation systems.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              TransitInsight AI was created to solve these challenges using
              Artificial Intelligence, Machine Learning, and predictive
              analytics, enabling smarter, faster, and more reliable public
              transportation.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              This platform is designed not only for passengers but also for
              transport authorities, staff, and administrators to make
              intelligent, data-driven decisions.
            </p>
          </motion.div>

          {/* Right Side */}

          <div className="grid gap-6 sm:grid-cols-2">

            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-400"
                >
                  <Icon
                    size={40}
                    className={`${card.color} mb-5`}
                  />

                  <h3 className="mb-4 text-xl font-bold text-white">
                    {card.title}
                  </h3>

                  <p className="leading-7 text-slate-400">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Story;
