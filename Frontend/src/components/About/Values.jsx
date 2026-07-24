import { motion } from "framer-motion";
import {
  Lightbulb,
  ShieldCheck,
  Leaf,
  HeartHandshake,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously innovate using Artificial Intelligence and Machine Learning to build smarter transportation solutions.",
    color: "text-cyan-400",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "Our platform focuses on dependable predictions, secure data handling, and consistent performance.",
    color: "text-blue-400",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Optimized routes reduce fuel consumption, traffic congestion, and environmental impact.",
    color: "text-emerald-400",
  },
  {
    icon: HeartHandshake,
    title: "User First",
    description:
      "Every feature is designed to improve the experience of passengers, transport staff, and administrators.",
    color: "text-indigo-400",
  },
];

function Values() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            OUR VALUES
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            What
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}Drives Us
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Our core values shape every decision we make and every feature
            we build for smarter public transportation.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900">
                  <Icon
                    size={34}
                    className={`${value.color} transition-transform duration-300 group-hover:scale-125`}
                  />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {value.title}
                </h3>

                <p className="leading-8 text-slate-400">
                  {value.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Values;
