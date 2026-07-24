import { motion } from "framer-motion";
import {
  MapPinned,
  BrainCircuit,
  BarChart3,
  BusFront,
  ArrowDown,
} from "lucide-react";

const workflow = [
  {
    icon: MapPinned,
    title: "Live GPS Data",
    description: "Collects real-time bus location and route information.",
    color: "text-cyan-400",
  },
  {
    icon: BrainCircuit,
    title: "AI Prediction",
    description: "Machine Learning predicts traffic and travel time.",
    color: "text-blue-400",
  },
  {
    icon: BarChart3,
    title: "Traffic Analysis",
    description: "Analyzes congestion using historical and live data.",
    color: "text-indigo-400",
  },
  {
    icon: BusFront,
    title: "Smart Route",
    description: "Suggests the fastest and most efficient bus route.",
    color: "text-cyan-400",
  },
];

function AISection() {
  return (
    <section className="relative overflow-hidden py-28">

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
        className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-cyan-500 blur-[180px]"
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
        className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-indigo-600 blur-[180px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-5xl font-extrabold text-white md:text-6xl">

            How Our{" "}

            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">

              AI Works

            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">

            TransitInsight AI continuously collects live transportation
            data, predicts traffic conditions, analyzes congestion,
            and recommends the smartest route in real time.

          </p>

        </motion.div>

        {/* Workflow */}

        <div className="mt-20 flex flex-col items-center">

          {workflow.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: .6,
                  delay: index * .2,
                }}
                viewport={{ once: true }}
                className="mb-8 w-full max-w-xl rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl"
              >

                <div className="flex items-center gap-6">

                  <div className="rounded-2xl bg-slate-900/80 p-4">

                    <Icon
                      size={36}
                      className={step.color}
                    />

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-white">

                      {step.title}

                    </h3>

                    <p className="mt-2 text-slate-300">

                      {step.description}

                    </p>

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default AISection;
