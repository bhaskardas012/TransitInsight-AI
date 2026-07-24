import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Save,
  User,
} from "lucide-react";

import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import { useUserData } from "../../../context/UserDataContext";

function Profile() {
  const { user, setUser } = useUserData();
  const [formData, setFormData] = useState(user);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUser(formData);
    setMessage("Profile updated successfully.");

    window.setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h1 className="text-4xl font-bold text-white">
            My Profile
          </h1>

          <p className="mt-3 text-slate-400">
            Manage your personal information and account
            preferences.
          </p>
        </section>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <ProfileField
              icon={User}
              label="Full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <ProfileField
              icon={Mail}
              label="Email address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />

            <ProfileField
              icon={Phone}
              label="Phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <ProfileField
              icon={MapPin}
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-400"
            >
              <Save size={18} />
              Save Changes
            </button>

            {message && (
              <p className="text-sm text-emerald-400">
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}

function ProfileField({
  icon: Icon,
  label,
  type = "text",
  ...inputProperties
}) {
  return (
    <label>
      <span className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </span>

      <div className="relative">
        <Icon
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          type={type}
          {...inputProperties}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"
        />
      </div>
    </label>
  );
}

export default Profile;
