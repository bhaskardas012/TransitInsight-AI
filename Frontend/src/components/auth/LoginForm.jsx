import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";

import InputField from "./InputField";
import PasswordInput from "./PasswordInput";
import AuthButton from "./AuthButton";

function LoginForm() {
  const {
  register,
  handleSubmit,
  watch,
  formState: { errors, isSubmitting },
} = useForm();

const password = watch("password");

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <InputField
    label="Email Address"
    type="email"
    placeholder="Enter your email"
    icon={Mail}
    register={register}
    name="email"
    rules={{
        required: "Email is required",
        pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Please enter a valid email"
        }
    }}
    error={errors.email}
/>

      <PasswordInput
  label="Confirm Password"
  placeholder="Confirm your password"
  register={register}
  name="confirmPassword"
  rules={{
    required: "Please confirm your password",
    validate: (value) =>
      value === password || "Passwords do not match",
  }}
  error={errors.confirmPassword}
/>

      <div className="mb-6 flex items-center justify-between">

        <label className="flex items-center gap-2 text-sm text-slate-300">

          <input
            type="checkbox"
            className="accent-cyan-500"
          />

          Remember Me

        </label>

        <Link
          to="/forgot-password"
          className="text-sm text-cyan-400 hover:text-cyan-300"
        >
          Forgot Password?
        </Link>

      </div>

      <AuthButton loading={isSubmitting}>
        Sign In
      </AuthButton>

      <p className="mt-8 text-center text-slate-300">

        Don't have an account?

        <Link
          to="/register"
          className="ml-2 font-semibold text-cyan-400 hover:text-cyan-300"
        >
          Register
        </Link>

      </p>

    </form>
  );
}

export default LoginForm;
