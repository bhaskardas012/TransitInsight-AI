import { Link } from "react-router-dom";
import { Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";

import InputField from "./InputField";
import PasswordInput from "./PasswordInput";
import AuthButton from "./AuthButton";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Register Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <InputField
        label="Full Name"
        placeholder="Enter your full name"
        icon={User}
        register={register}
        name="name"
        error={errors.name}
      />

      <InputField
        label="Email Address"
        placeholder="Enter your email"
        type="email"
        icon={Mail}
        register={register}
        name="email"
        error={errors.email}
      />

      <PasswordInput
        label="Password"
        placeholder="Create a password"
        register={register}
        name="password"
        error={errors.password}
      />

      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm your password"
        register={register}
        name="confirmPassword"
        error={errors.confirmPassword}
      />

      <AuthButton loading={isSubmitting}>
        Create Account
      </AuthButton>

      <p className="mt-8 text-center text-slate-300">
        Already have an account?

        <Link
          to="/login"
          className="ml-2 font-semibold text-cyan-400 hover:text-cyan-300"
        >
          Login
        </Link>
      </p>

    </form>
  );
}

export default RegisterForm;
