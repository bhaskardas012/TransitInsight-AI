import AuthLayout from "../../../components/auth/AuthLayout";
import ResetPasswordForm from "../../../components/auth/ResetPasswordForm";

function ResetPassword() {
  return (
    <AuthLayout
      title="Create New Password"
      subtitle="Choose a strong password for your account."
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
}

export default ResetPassword;
