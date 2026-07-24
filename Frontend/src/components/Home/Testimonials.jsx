import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Daily Passenger",
    review:
      "TransitInsight AI helped me find the fastest bus routes and reduced my travel time significantly.",
  },
  {
    name: "Priya Das",
    role: "Bus Driver",
    review:
      "The live traffic insights and AI route suggestions make my daily routes much more efficient.",
  },
  {
    name: "Amit Verma",
    role: "Transport Manager",
    review:
      "The analytics dashboard provides valuable insights for improving bus operations and reducing delays.",
  },
];

function Testimonials() {
  return (
    <section className="relative overflow-hidden py-28">

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
          <h2 className="text-5xl font-extrabold text-white">
            What Our{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Users Say
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Trusted by passengers, drivers, and transport authorities for smarter public transportation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl hover:border-cyan-400 transition-all"
            >
              <Quote className="mb-5 text-cyan-400" size={36} />

              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-8 text-slate-300">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-white">
                  {item.name}
                </h4>

                <p className="text-cyan-400">
                  {item.role}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
