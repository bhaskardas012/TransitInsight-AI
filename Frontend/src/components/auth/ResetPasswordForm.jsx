import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import PasswordInput from "./PasswordInput";
import AuthButton from "./AuthButton";

function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Reset Password:", data);

    // Backend Later:
    // axios.post("/auth/reset-password", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <PasswordInput
        label="New Password"
        placeholder="Enter new password"
        register={register}
        name="password"
        rules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        }}
        error={errors.password}
      />

      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm new password"
        register={register}
        name="confirmPassword"
        rules={{
          required: "Confirm your password",
          validate: (value) =>
            value === password || "Passwords do not match",
        }}
        error={errors.confirmPassword}
      />

      <AuthButton loading={isSubmitting}>
        Update Password
      </AuthButton>

      <p className="mt-8 text-center text-slate-300">
        Remember your password?

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

export default ResetPasswordForm;
