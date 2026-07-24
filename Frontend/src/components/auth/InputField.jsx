import { motion } from "framer-motion";

function InputField({
  label,
  type = "text",
  placeholder,
  icon: Icon,
  register,
  name,
  rules,
  error,
}) {
  return (
    <div className="mb-6">
      <label className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </label>

      <motion.div
        whileFocus={{ scale: 1.02 }}
        className="group flex items-center rounded-xl border border-cyan-500/20 bg-white/5 px-4 backdrop-blur-lg transition-all duration-300 focus-within:border-cyan-400 focus-within:shadow-lg focus-within:shadow-cyan-500/20"
      >
        {Icon && (
          <Icon
            size={20}
            className="mr-3 text-cyan-400 transition group-focus-within:text-cyan-300"
          />
        )}

        <input
          type={type}
          placeholder={placeholder}
          {...(register && register(name, rules))}
          className="w-full bg-transparent py-4 text-white placeholder:text-slate-400 focus:outline-none"
        />
      </motion.div>

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default InputField;
