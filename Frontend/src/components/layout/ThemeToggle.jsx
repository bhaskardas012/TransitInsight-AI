import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{
        scale: 1.08,
        rotate: 8,
      }}
      whileTap={{
        scale: 0.92,
      }}
      onClick={toggleTheme}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-white/5 text-cyan-300 backdrop-blur-xl transition hover:border-cyan-400 hover:bg-cyan-500/10"
      aria-label="Toggle Theme"
    >
      <motion.div
        key={darkMode ? "moon" : "sun"}
        initial={{
          rotate: -180,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          rotate: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {darkMode ? (
          <Moon size={20} />
        ) : (
          <Sun size={20} />
        )}
      </motion.div>
    </motion.button>
  );
}

export default ThemeToggle;
