import { useForm } from "react-hook-form";
import { User, Mail, Phone, BookOpen } from "lucide-react";

import InputField from "../auth/InputField";
import AuthButton from "../auth/AuthButton";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact Form:", data);

    // Backend Integration Later
    // await axios.post("/api/contact", data);
  };

  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-4xl px-6">

        <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-xl">

          <div className="mb-10 text-center">

            <h2 className="text-4xl font-bold text-white">
              Send Us a Message
            </h2>

            <p className="mt-4 text-slate-300">
              Have questions, suggestions, or need support?
              We'd love to hear from you.
            </p>

          </div>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="grid gap-6 md:grid-cols-2">

              <InputField
                label="Full Name"
                placeholder="Enter your name"
                icon={User}
                register={register}
                name="name"
                rules={{
                  required: "Full name is required",
                }}
                error={errors.name}
              />

              <InputField
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                icon={Mail}
                register={register}
                name="email"
                rules={{
                  required: "Email is required",
                }}
                error={errors.email}
              />

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <InputField
                label="Phone Number"
                placeholder="Enter your phone number"
                icon={Phone}
                register={register}
                name="phone"
                rules={{
                  required: "Phone number is required",
                }}
                error={errors.phone}
              />

              <InputField
                label="Subject"
                placeholder="Subject"
                icon={BookOpen}
                register={register}
                name="subject"
                rules={{
                  required: "Subject is required",
                }}
                error={errors.subject}
              />

            </div>

            {/* Message */}

            <div className="mb-8">

              <label className="mb-2 block text-sm font-medium text-slate-200">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                {...register("message", {
                  required: "Message is required",
                })}
                className="w-full rounded-xl border border-cyan-500/20 bg-white/5 p-4 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
              />

              {errors.message && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.message.message}
                </p>
              )}

            </div>

            <AuthButton loading={isSubmitting}>
              Send Message
            </AuthButton>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ContactForm;
