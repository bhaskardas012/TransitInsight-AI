import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const cards = [
  {
    icon: MapPin,
    title: "Our Location",
    value: "Kolkata, West Bengal, India",
    color: "text-cyan-400",
  },
  {
    icon: Phone,
    title: "Phone Number",
    value: "+91 XXXXX XXXXX",
    color: "text-blue-400",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "support@transitinsight.ai",
    color: "text-indigo-400",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat • 9:00 AM - 6:00 PM",
    color: "text-emerald-400",
  },
];

function ContactCards() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {cards.map((card, index) => {
            const Icon = card.icon;

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
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900">
                  <Icon
                    size={34}
                    className={card.color}
                  />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {card.title}
                </h3>

                <p className="mt-4 text-slate-300 leading-7">
                  {card.value}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default ContactCards;
