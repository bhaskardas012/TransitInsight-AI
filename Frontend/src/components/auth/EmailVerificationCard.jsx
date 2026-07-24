import { useState } from "react";
import { MailCheck, RefreshCw, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function EmailVerificationCard() {
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  const resendEmail = async () => {
    setLoading(true);

    // Backend later
    // await axios.post("/auth/resend-verification");

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const checkVerification = () => {
    // Backend later
    // Check verification status

    setVerified(true);
  };

  return (
    <div className="text-center">

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/10"
      >
        {verified ? (
          <CheckCircle2
            size={60}
            className="text-green-400"
          />
        ) : (
          <MailCheck
            size={60}
            className="text-cyan-400"
          />
        )}
      </motion.div>

      <h3 className="text-2xl font-bold text-white">
        {verified
          ? "Email Verified!"
          : "Check Your Inbox"}
      </h3>

      <p className="mt-4 leading-8 text-slate-300">
        {verified
          ? "Your email has been successfully verified. You can now log in."
          : "A verification email has been sent. Please click the verification link before continuing."}
      </p>

      {!verified && (
        <button
          onClick={checkVerification}
          className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-600"
        >
          I've Verified My Email
        </button>
      )}

      {!verified && (
        <button
          onClick={resendEmail}
          disabled={loading}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/20 px-6 py-3 text-cyan-300 transition hover:bg-cyan-500/10"
        >
          <RefreshCw
            size={18}
            className={loading ? "animate-spin" : ""}
          />
          {loading ? "Sending..." : "Resend Verification Email"}
        </button>
      )}

      {verified && (
        <Link
          to="/login"
          className="mt-8 inline-block rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-8 py-4 font-semibold text-white hover:scale-105 transition"
        >
          Continue to Login
        </Link>
      )}

    </div>
  );
}

export default EmailVerificationCard;
