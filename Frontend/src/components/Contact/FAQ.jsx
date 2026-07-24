import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I contact TransitInsight AI?",
    answer:
      "You can reach us using the contact form above or by emailing support@transitinsight.ai. We typically respond within one business day.",
  },
  {
    question: "What are your support hours?",
    answer:
      "Our support team is available Monday to Saturday from 9:00 AM to 6:00 PM (IST).",
  },
  {
    question: "Can I request a live demonstration?",
    answer:
      "Yes. Organizations, universities, and transport authorities can request a personalized demo through the contact form.",
  },
  {
    question: "How can I report a technical issue?",
    answer:
      "Please provide detailed information about the issue, including screenshots if possible, using the contact form. Our technical team will investigate it.",
  },
  {
    question: "Do you accept partnerships?",
    answer:
      "Yes. We welcome collaborations with transport agencies, educational institutions, and technology partners.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            SUPPORT FAQ
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Need
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}Help?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Here are answers to some of the most frequently asked support questions.
          </p>
        </motion.div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <motion.div
                  animate={{
                    rotate: active === index ? 180 : 0,
                  }}
                >
                  <ChevronDown className="text-cyan-400" />
                </motion.div>
              </button>

              <AnimatePresence>

                {active === index && (

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
                    <div className="border-t border-cyan-500/10 px-6 py-5 leading-8 text-slate-300">
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
