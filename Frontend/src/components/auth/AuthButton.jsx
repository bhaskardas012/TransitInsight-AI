import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

function AuthButton({
  children,
  loading = false,
  type = "submit",
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 30px rgba(34,211,238,0.4)",
      }}
      whileTap={{ scale: 0.97 }}
      type={type}
      disabled={loading}
      className="mt-2 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 px-6 py-4 font-semibold text-white transition duration-300 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {loading ? (
        <>
          <Loader2
            size={20}
            className="animate-spin"
          />
          Please wait...
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}

export default AuthButton;
