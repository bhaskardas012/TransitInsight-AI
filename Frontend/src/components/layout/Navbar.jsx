import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BusFront, Menu, Globe } from "lucide-react";

import { motion } from "framer-motion";

import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItem = ({ isActive }) =>
    `relative transition duration-300 ${
      isActive
        ? "text-cyan-400 font-semibold"
        : "text-white hover:text-cyan-400"
    }`;

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <motion.div
              whileHover={{
                rotate: -10,
                scale: 1.05,
              }}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 shadow-lg shadow-cyan-500/30"
            >
              <BusFront
                size={26}
                className="text-white"
              />
            </motion.div>

            <div>

              <h1 className="text-xl font-bold text-white">
                TransitInsight AI
              </h1>

              <p className="text-xs text-slate-400">
                Smart Public Transportation
              </p>

            </div>
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-8 lg:flex">

            <NavLink className={navItem} to="/">
              Home
            </NavLink>

            <NavLink className={navItem} to="/about">
              About
            </NavLink>

            <NavLink className={navItem} to="/route-planner">
              Routes
            </NavLink>

            <NavLink className={navItem} to="/traffic">
              Traffic
            </NavLink>

            <NavLink className={navItem} to="/reports">
              Reports
            </NavLink>

            <NavLink className={navItem} to="/contact">
              Contact
            </NavLink>

          </div>

          {/* Right Side */}

          <div className="hidden items-center gap-4 lg:flex">

            {/* Theme */}

            <ThemeToggle />

            {/* Language */}

            <button
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-white/5 text-cyan-300 backdrop-blur-xl transition hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              <Globe size={20} />
            </button>

            {/* Login */}

            <Link
              to="/login"
              className="rounded-xl border border-cyan-400 px-5 py-2 text-cyan-300 transition duration-300 hover:bg-cyan-500 hover:text-white"
            >
              Login
            </Link>

            {/* Register */}

            <Link
              to="/register"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-5 py-2 font-semibold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:scale-105 hover:shadow-cyan-500/40"
            >
              Register
            </Link>

          </div>

          {/* Mobile Buttons */}

          <div className="flex items-center gap-3 lg:hidden">

            <ThemeToggle />

            <button
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-white/5 text-white"
            >
              <Globe size={20} />
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-white/5 text-white"
            >
              <Menu size={22} />
            </button>

          </div>

        </div>

      </nav>

      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}

export default Navbar;
