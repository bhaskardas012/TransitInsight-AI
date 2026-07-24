import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  BrainCircuit,
  BarChart3,
} from "lucide-react";

const benefits = [
  {
    icon: BrainCircuit,
    title: "AI Decision Making",
    description:
      "Artificial Intelligence predicts delays and recommends smarter routes.",
    color: "text-cyan-400",
  },
  {
    icon: Clock3,
    title: "Real-Time Updates",
    description:
      "Receive live bus status, estimated arrival time, and route changes.",
    color: "text-blue-400",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Powerful dashboards provide traffic and passenger insights.",
    color: "text-indigo-400",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    description:
      "Designed with modern technologies for speed, reliability, and security.",
    color: "text-cyan-400",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
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
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-indigo-600 blur-[170px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-extrabold text-white">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              TransitInsight AI
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Built with Artificial Intelligence to provide faster, smarter,
            and more reliable public transportation.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl hover:border-cyan-400 transition-all"
              >
                <Icon size={44} className={item.color} />

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-300 leading-7">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
