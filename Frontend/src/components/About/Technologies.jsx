import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cpu,
  Database,
  Map,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const technologies = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "AI models analyze traffic patterns, predict congestion, and support intelligent decision-making.",
    color: "text-cyan-400",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description:
      "Machine Learning algorithms optimize routes and continuously improve prediction accuracy.",
    color: "text-blue-400",
  },
  {
    icon: Database,
    title: "Big Data Analytics",
    description:
      "Large-scale transportation data is processed to uncover insights and improve operational efficiency.",
    color: "text-indigo-400",
  },
  {
    icon: Map,
    title: "Interactive Maps",
    description:
      "Real-time maps provide live route visualization, traffic updates, and bus tracking.",
    color: "text-emerald-400",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description:
      "Cloud services enable scalable infrastructure, secure APIs, and reliable system availability.",
    color: "text-sky-400",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Security best practices protect user information, authentication, and system integrity.",
    color: "text-cyan-300",
  },
];

function Technologies() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#1E3A8A] py-24">

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
        className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-indigo-600 blur-[170px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            TECHNOLOGY STACK
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Powered by
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}Modern Technologies
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            TransitInsight AI combines Artificial Intelligence, Machine
            Learning, cloud computing, and real-time analytics to build a
            smarter transportation ecosystem.
          </p>
        </motion.div>

        {/* Technology Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
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
                    className={`${tech.color} transition-transform duration-300 group-hover:scale-125`}
                  />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {tech.title}
                </h3>

                <p className="leading-8 text-slate-400">
                  {tech.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Technologies;
