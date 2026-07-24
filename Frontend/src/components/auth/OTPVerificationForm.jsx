import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import AuthButton from "./AuthButton";

function OTPVerificationForm() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);

  const inputs = useRef([]);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData
      .getData("text")
      .trim()
      .slice(0, 6);

    if (!/^\d+$/.test(paste)) return;

    const values = paste.split("");

    const updated = [...otp];

    values.forEach((num, i) => {
      updated[i] = num;
    });

    setOtp(updated);

    if (values.length < 6) {
      inputs.current[values.length].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const code = otp.join("");

    console.log("OTP:", code);

    // Backend later
    // axios.post("/verify-otp",{otp:code})
  };

  const resendOTP = () => {
    setTimer(60);
    console.log("Resend OTP");

    // Backend later
  };

  return (
    <form onSubmit={handleSubmit}>

      <div
        onPaste={handlePaste}
        className="mb-8 flex justify-center gap-3"
      >
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            value={digit}
            maxLength={1}
            onChange={(e) =>
              handleChange(e.target.value, index)
            }
            onKeyDown={(e) =>
              handleKeyDown(e, index)
            }
            className="h-16 w-16 rounded-xl border border-cyan-500/20 bg-white/5 text-center text-2xl font-bold text-white focus:border-cyan-400 focus:outline-none"
          />
        ))}
      </div>

      <AuthButton>
        Verify OTP
      </AuthButton>

      <div className="mt-8 text-center">

        {timer > 0 ? (
          <p className="text-slate-300">
            Resend OTP in{" "}
            <span className="font-bold text-cyan-400">
              {timer}s
            </span>
          </p>
        ) : (
          <button
            type="button"
            onClick={resendOTP}
            className="font-semibold text-cyan-400 hover:text-cyan-300"
          >
            Resend OTP
          </button>
        )}

      </div>

      <p className="mt-6 text-center text-slate-300">
        Back to

        <Link
          to="/login"
          className="ml-2 text-cyan-400 font-semibold"
        >
          Login
        </Link>
      </p>

    </form>
  );
}

export default OTPVerificationForm;
