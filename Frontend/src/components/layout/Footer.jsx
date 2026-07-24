import { motion } from "framer-motion";
import { BusFront, Mail, ArrowUp } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-cyan-500/20 bg-[#020617]">

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
        className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500 blur-[170px]"
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
        className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-indigo-600 blur-[170px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <BusFront
                className="text-cyan-400"
                size={36}
              />

              <h2 className="text-2xl font-bold text-white">
                TransitInsight AI
              </h2>

            </div>

            <p className="mt-5 leading-7 text-slate-400">

              Intelligent public transportation powered by Artificial
              Intelligence, real-time analytics, and smart route optimization.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li><a href="/">Home</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/traffic">Traffic</a></li>
              <li><a href="/reports">Reports</a></li>

            </ul>

          </div>

          {/* AI Features */}

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              AI Features
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>Route Optimization</li>
              <li>Traffic Prediction</li>
              <li>Bus Tracking</li>
              <li>Analytics Dashboard</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">

              <p className="flex items-center gap-2">
                <Mail size={18} />
                support@transitinsight.ai
              </p>

              <div className="flex gap-4 pt-4">

                <FaGithub
  size={24}
  className="cursor-pointer text-cyan-400 transition hover:scale-110"
/>

<FaLinkedin
  size={24}
  className="cursor-pointer text-cyan-400 transition hover:scale-110"
/>

<FaFacebook
  size={24}
  className="cursor-pointer text-cyan-400 transition hover:scale-110"
/>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-cyan-500/20 pt-8 md:flex-row">

          <p className="text-slate-400">
            © 2026 TransitInsight AI. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="rounded-full bg-cyan-500 p-3 text-white transition hover:scale-110 hover:bg-cyan-600"
          >
            <ArrowUp size={22} />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
