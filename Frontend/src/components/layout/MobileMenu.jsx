import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { X } from "lucide-react";

function MobileMenu({ isOpen, setIsOpen }) {
  const navItem = ({ isActive }) =>
    `block rounded-lg px-4 py-3 transition ${
      isActive
        ? "bg-cyan-500/20 text-cyan-400 font-semibold"
        : "text-white hover:bg-slate-800 hover:text-cyan-400"
    }`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}

          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed right-0 top-0 z-50 flex h-full w-80 flex-col bg-slate-950 p-6 shadow-2xl"
          >
            {/* Header */}

            <div className="mb-8 flex items-center justify-between">

              <h2 className="text-xl font-bold text-white">
                Menu
              </h2>

              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 text-white hover:bg-slate-800"
              >
                <X size={24} />
              </button>

            </div>

            {/* Navigation */}

            <div className="flex flex-col gap-2">

              <NavLink
                to="/"
                className={navItem}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={navItem}
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>

              <NavLink
                to="/route-planner"
                className={navItem}
                onClick={() => setIsOpen(false)}
              >
                Routes
              </NavLink>

              <NavLink
                to="/traffic"
                className={navItem}
                onClick={() => setIsOpen(false)}
              >
                Traffic
              </NavLink>

              <NavLink
                to="/reports"
                className={navItem}
                onClick={() => setIsOpen(false)}
              >
                Reports
              </NavLink>

              <NavLink
                to="/contact"
                className={navItem}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>

            </div>

            {/* Bottom Buttons */}

            <div className="mt-auto space-y-4">

              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block rounded-xl border border-cyan-400 py-3 text-center text-cyan-300 transition hover:bg-cyan-500 hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="block rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 py-3 text-center font-semibold text-white transition hover:scale-[1.02]"
              >
                Register
              </Link>

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
