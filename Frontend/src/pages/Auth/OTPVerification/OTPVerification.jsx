import AuthLayout from "../../../components/auth/AuthLayout";
import OTPVerificationForm from "../../../components/auth/OTPVerificationForm";

function OTPVerification() {
  return (
    <AuthLayout
      title="OTP Verification"
      subtitle="Enter the 6-digit verification code sent to your email."
    >
      <OTPVerificationForm />
    </AuthLayout>
  );
}

export default OTPVerification;
