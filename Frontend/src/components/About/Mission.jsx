import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To revolutionize public transportation by leveraging Artificial Intelligence, Machine Learning, and real-time analytics to create smarter, safer, and more efficient mobility solutions for passengers and transport authorities.",
    color: "text-cyan-400",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become a leading AI-powered transportation ecosystem that enables intelligent decision-making, sustainable urban mobility, and seamless travel experiences for cities around the world.",
    color: "text-indigo-400",
  },
];

function Mission() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#1E3A8A] py-24">

      {/* Background Glow */}

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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-white">
            Mission &
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}Vision
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Driven by innovation, powered by AI, and focused on improving
            the future of public transportation.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900">
                  <Icon size={34} className={item.color} />
                </div>

                <h3 className="mb-5 text-3xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="leading-8 text-slate-300">
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

export default Mission;
