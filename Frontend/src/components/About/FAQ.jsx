import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is TransitInsight AI?",
    answer:
      "TransitInsight AI is an intelligent public transportation platform that uses Artificial Intelligence and Machine Learning to optimize routes, predict traffic conditions, and improve passenger experiences.",
  },
  {
    question: "Who can use this platform?",
    answer:
      "The platform is designed for passengers, transport staff, administrators, and city transportation authorities, each with role-based access and features.",
  },
  {
    question: "What technologies are used?",
    answer:
      "TransitInsight AI is built using React, Python, FastAPI, PostgreSQL, AI/ML models, interactive maps, and cloud technologies.",
  },
  {
    question: "How does AI improve transportation?",
    answer:
      "AI analyzes traffic patterns, predicts congestion, recommends optimized routes, and supports data-driven transportation planning.",
  },
  {
    question: "Will real-time bus tracking be available?",
    answer:
      "Yes. The platform is designed to support real-time bus tracking, live traffic updates, and route visualization.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Frequently Asked
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}Questions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Find answers to the most common questions about TransitInsight AI.
          </p>
        </motion.div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                >
                  <ChevronDown className="text-cyan-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <div className="border-t border-cyan-500/10 px-6 py-5 text-slate-300 leading-8">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;
