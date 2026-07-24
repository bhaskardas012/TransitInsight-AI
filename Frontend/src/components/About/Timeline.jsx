import { motion } from "framer-motion";
import {
  Lightbulb,
  Search,
  BrainCircuit,
  Code2,
  Rocket,
} from "lucide-react";

const timeline = [
  {
    icon: Lightbulb,
    title: "Project Idea",
    year: "2026",
    description:
      "The vision of TransitInsight AI began with the goal of solving urban transportation challenges using Artificial Intelligence.",
    color: "text-yellow-400",
  },
  {
    icon: Search,
    title: "Research & Planning",
    year: "Phase 1",
    description:
      "Extensive research on public transportation systems, traffic congestion, passenger behavior, and AI technologies.",
    color: "text-cyan-400",
  },
  {
    icon: BrainCircuit,
    title: "AI Development",
    year: "Phase 2",
    description:
      "Developing intelligent algorithms for traffic prediction, route optimization, and demand forecasting.",
    color: "text-blue-400",
  },
  {
    icon: Code2,
    title: "Platform Development",
    year: "Phase 3",
    description:
      "Building a modern web platform using React, Python, FastAPI, PostgreSQL, and interactive mapping technologies.",
    color: "text-indigo-400",
  },
  {
    icon: Rocket,
    title: "Future Vision",
    year: "Coming Soon",
    description:
      "Expanding TransitInsight AI into a complete smart-city transportation ecosystem with real-time analytics and intelligent automation.",
    color: "text-emerald-400",
  },
];

function Timeline() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">

      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            OUR JOURNEY
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Project
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}Timeline
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            The journey of TransitInsight AI from an innovative concept to
            an intelligent transportation platform.
          </p>
        </motion.div>

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 h-full w-1 rounded bg-cyan-500/20 md:left-1/2 md:-translate-x-1/2"></div>

          {timeline.map((item, index) => {
            const Icon = item.icon;
            const left = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className={`relative mb-14 flex w-full ${
                  left ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="ml-16 w-full md:ml-0 md:w-[46%]">

                  <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20">

                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900">

                      <Icon
                        size={34}
                        className={item.color}
                      />

                    </div>

                    <span className="text-sm font-semibold text-cyan-300">
                      {item.year}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-400">
                      {item.description}
                    </p>

                  </div>

                </div>

                {/* Timeline Dot */}

                <div className="absolute left-6 top-8 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-400 md:left-1/2"></div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Timeline;
