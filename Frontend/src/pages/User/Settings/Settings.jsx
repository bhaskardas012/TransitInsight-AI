import { useState } from "react";
import {
  Bell,
  CheckCircle2,
  Eye,
  EyeOff,
  Globe2,
  LockKeyhole,
  Mail,
  MapPin,
  Moon,
  Save,
  ShieldCheck,
  Smartphone,
  Sun,
  Trash2,
  UserCog,
} from "lucide-react";

import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import { useUserData } from "../../../context/UserDataContext";
import { useTheme } from "../../../context/ThemeContext";

function Settings() {
  const {
    user,
    setUser,
    notifications,
    setNotifications,
    setRouteHistory,
    setSavedRoutes,
    setReports,
  } = useUserData();

  const { theme, toggleTheme } = useTheme();

  const [accountSettings, setAccountSettings] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    location: user.location || "",
  });

  const [notificationSettings, setNotificationSettings] = useState({
    trafficAlerts: true,
    routeUpdates: true,
    reportUpdates: true,
    emailNotifications: true,
    pushNotifications: false,
  });

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: "Private",
    saveRouteHistory: true,
    personalizedRecommendations: true,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const [message, setMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const handleAccountChange = (event) => {
    const { name, value } = event.target;

    setAccountSettings((previousSettings) => ({
      ...previousSettings,
      [name]: value,
    }));
  };

  const handleNotificationChange = (event) => {
    const { name, checked } = event.target;

    setNotificationSettings((previousSettings) => ({
      ...previousSettings,
      [name]: checked,
    }));
  };

  const handlePrivacyChange = (event) => {
    const { name, value, type, checked } = event.target;

    setPrivacySettings((previousSettings) => ({
      ...previousSettings,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;

    setPasswordData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = (fieldName) => {
    setShowPasswords((previousState) => ({
      ...previousState,
      [fieldName]: !previousState[fieldName],
    }));
  };

  const handleSaveAccount = (event) => {
    event.preventDefault();

    setUser((previousUser) => ({
      ...previousUser,
      ...accountSettings,
    }));

    setMessage("Settings saved successfully.");

    window.setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const handleUpdatePassword = (event) => {
    event.preventDefault();

    if (
      !passwordData.currentPassword ||
      !passwordData.newPassword ||
      !passwordData.confirmPassword
    ) {
      setPasswordMessage("Please complete all password fields.");
      return;
    }

    if (passwordData.newPassword.length < 8) {
      setPasswordMessage(
        "New password must contain at least 8 characters."
      );
      return;
    }

    if (
      passwordData.newPassword !==
      passwordData.confirmPassword
    ) {
      setPasswordMessage("New passwords do not match.");
      return;
    }

    setPasswordMessage(
      "Password validation completed. Backend connection is required to update it securely."
    );

    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  const handleClearPersonalData = () => {
    const confirmed = window.confirm(
      "This will delete your route history, saved routes, reports, and notifications from this browser. Continue?"
    );

    if (!confirmed) {
      return;
    }

    setRouteHistory([]);
    setSavedRoutes([]);
    setReports([]);
    setNotifications([]);

    setMessage("Personal activity data cleared.");
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <section className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            <UserCog size={18} />
            Account preferences
          </div>

          <h1 className="mt-5 text-3xl font-bold text-white md:text-4xl">
            Settings
          </h1>

          <p className="mt-3 max-w-2xl leading-7 text-slate-400">
            Manage your account information, notification preferences,
            privacy controls, appearance, and security settings.
          </p>
        </section>

        {message && (
          <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300">
            <CheckCircle2 size={20} />
            <span>{message}</span>
          </div>
        )}

        <section className="grid gap-8 xl:grid-cols-2">
          <form
            onSubmit={handleSaveAccount}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
          >
            <SectionHeader
              icon={UserCog}
              eyebrow="Personal details"
              title="Account Settings"
            />

            <div className="mt-6 space-y-5">
              <SettingsInput
                icon={UserCog}
                label="Full name"
                name="name"
                value={accountSettings.name}
                onChange={handleAccountChange}
              />

              <SettingsInput
                icon={Mail}
                label="Email address"
                type="email"
                name="email"
                value={accountSettings.email}
                onChange={handleAccountChange}
              />

              <SettingsInput
                icon={Smartphone}
                label="Phone number"
                name="phone"
                value={accountSettings.phone}
                onChange={handleAccountChange}
              />

              <SettingsInput
                icon={MapPin}
                label="Location"
                name="location"
                value={accountSettings.location}
                onChange={handleAccountChange}
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-400"
            >
              <Save size={18} />
              Save Account Settings
            </button>
          </form>

          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <SectionHeader
              icon={theme === "dark" ? Moon : Sun}
              eyebrow="Interface"
              title="Appearance"
            />

            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="font-semibold text-white">
                    Theme mode
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Current theme: {theme}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
                >
                  {theme === "dark" ? (
                    <Sun size={18} />
                  ) : (
                    <Moon size={18} />
                  )}

                  Switch Theme
                </button>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <div className="flex items-start gap-3">
                <Globe2
                  size={21}
                  className="mt-0.5 text-cyan-400"
                />

                <div>
                  <p className="font-semibold text-white">
                    Language
                  </p>

                  <select
                    defaultValue="English"
                    className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
                  >
                    <option>English</option>
                    <option>Bengali</option>
                    <option>Hindi</option>
                  </select>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="grid gap-8 xl:grid-cols-2">
          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <SectionHeader
              icon={Bell}
              eyebrow="Alert control"
              title="Notification Settings"
            />

            <div className="mt-6 space-y-4">
              <ToggleSetting
                label="Traffic alerts"
                description="Receive alerts about congestion and delays."
                name="trafficAlerts"
                checked={notificationSettings.trafficAlerts}
                onChange={handleNotificationChange}
              />

              <ToggleSetting
                label="Route updates"
                description="Receive updates about searched and saved routes."
                name="routeUpdates"
                checked={notificationSettings.routeUpdates}
                onChange={handleNotificationChange}
              />

              <ToggleSetting
                label="Report updates"
                description="Receive notifications when reports are generated."
                name="reportUpdates"
                checked={notificationSettings.reportUpdates}
                onChange={handleNotificationChange}
              />

              <ToggleSetting
                label="Email notifications"
                description="Receive important updates by email."
                name="emailNotifications"
                checked={notificationSettings.emailNotifications}
                onChange={handleNotificationChange}
              />

              <ToggleSetting
                label="Push notifications"
                description="Receive browser notifications when supported."
                name="pushNotifications"
                checked={notificationSettings.pushNotifications}
                onChange={handleNotificationChange}
              />
            </div>

            <button
              type="button"
              onClick={handleClearNotifications}
              disabled={notifications.length === 0}
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-red-500/30 px-4 py-2.5 text-sm font-semibold text-red-300 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Trash2 size={17} />
              Clear Notifications
            </button>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <SectionHeader
              icon={ShieldCheck}
              eyebrow="Personal data"
              title="Privacy Settings"
            />

            <div className="mt-6 space-y-5">
              <label>
                <span className="mb-2 block text-sm font-medium text-slate-300">
                  Profile visibility
                </span>

                <select
                  name="profileVisibility"
                  value={privacySettings.profileVisibility}
                  onChange={handlePrivacyChange}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
                >
                  <option>Private</option>
                  <option>Public</option>
                  <option>Team only</option>
                </select>
              </label>

              <ToggleSetting
                label="Save route history"
                description="Keep your recent searches in this browser."
                name="saveRouteHistory"
                checked={privacySettings.saveRouteHistory}
                onChange={handlePrivacyChange}
              />

              <ToggleSetting
                label="Personalized recommendations"
                description="Use your activity for better route suggestions."
                name="personalizedRecommendations"
                checked={
                  privacySettings.personalizedRecommendations
                }
                onChange={handlePrivacyChange}
              />
            </div>

            <button
              type="button"
              onClick={handleClearPersonalData}
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-red-500/30 px-4 py-2.5 text-sm font-semibold text-red-300 transition hover:bg-red-500/10"
            >
              <Trash2 size={17} />
              Clear Personal Activity Data
            </button>
          </section>
        </section>

        <form
          onSubmit={handleUpdatePassword}
          className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
        >
          <SectionHeader
            icon={LockKeyhole}
            eyebrow="Account protection"
            title="Password and Security"
          />

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <PasswordInput
              label="Current password"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              visible={showPasswords.currentPassword}
              onToggle={() =>
                togglePasswordVisibility("currentPassword")
              }
            />

            <PasswordInput
              label="New password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              visible={showPasswords.newPassword}
              onToggle={() =>
                togglePasswordVisibility("newPassword")
              }
            />

            <PasswordInput
              label="Confirm new password"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              visible={showPasswords.confirmPassword}
              onToggle={() =>
                togglePasswordVisibility("confirmPassword")
              }
            />
          </div>

          {passwordMessage && (
            <p className="mt-4 text-sm text-cyan-300">
              {passwordMessage}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-400"
          >
            <LockKeyhole size={18} />
            Update Password
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}

function SectionHeader({
  icon: Icon,
  eyebrow,
  title,
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm font-medium text-cyan-400">
          {eyebrow}
        </p>

        <h2 className="mt-1 text-2xl font-bold text-white">
          {title}
        </h2>
      </div>

      <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-400">
        <Icon size={23} />
      </div>
    </div>
  );
}

function SettingsInput({
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

function ToggleSetting({
  label,
  description,
  name,
  checked,
  onChange,
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
      <div>
        <p className="font-semibold text-white">
          {label}
        </p>

        <p className="mt-1 text-sm text-slate-400">
          {description}
        </p>
      </div>

      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-5 w-5 accent-cyan-500"
      />
    </label>
  );
}

function PasswordInput({
  label,
  name,
  value,
  onChange,
  visible,
  onToggle,
}) {
  return (
    <label>
      <span className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </span>

      <div className="relative">
        <LockKeyhole
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          type={visible ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-12 text-white outline-none focus:border-cyan-500"
        />

        <button
          type="button"
          onClick={onToggle}
          aria-label={
            visible ? "Hide password" : "Show password"
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-cyan-400"
        >
          {visible ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>
      </div>
    </label>
  );
}

export default Settings;
