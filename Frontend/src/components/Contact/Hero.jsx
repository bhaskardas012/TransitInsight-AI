import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative overflow-hidden py-28">

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500 blur-[170px]"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-600 blur-[170px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-white"
        >
          Contact
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            {" "}Us
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300"
        >
          We'd love to hear from you. Whether you have questions,
          feedback, partnership opportunities, or support requests,
          our team is ready to help.
        </motion.p>

      </div>

    </section>
  );
}

export default Hero;
