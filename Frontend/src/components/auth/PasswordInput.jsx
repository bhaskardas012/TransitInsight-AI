import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { motion } from "framer-motion";

function PasswordInput({
  label,
  placeholder,
  register,
  name,
  rules,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-6">
      <label className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </label>

      <motion.div
        whileFocus={{ scale: 1.02 }}
        className="group flex items-center rounded-xl border border-cyan-500/20 bg-white/5 px-4 backdrop-blur-lg transition-all duration-300 focus-within:border-cyan-400 focus-within:shadow-lg focus-within:shadow-cyan-500/20"
      >
        <Lock
          size={20}
          className="mr-3 text-cyan-400"
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          {...(register && register(name, rules))}
          className="w-full bg-transparent py-4 text-white placeholder:text-slate-400 focus:outline-none"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-cyan-400 transition hover:text-cyan-300"
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </motion.div>

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default PasswordInput;
