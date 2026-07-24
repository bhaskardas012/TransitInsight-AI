import AuthLayout from "../../../components/auth/AuthLayout";
import EmailVerificationCard from "../../../components/auth/EmailVerificationCard";

function EmailVerification() {
  return (
    <AuthLayout
      title="Verify Your Email"
      subtitle="We've sent a verification link to your email address."
    >
      <EmailVerificationCard />
    </AuthLayout>
  );
}

export default EmailVerification;
