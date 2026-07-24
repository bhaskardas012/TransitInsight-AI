import { BrowserRouter, Route, Routes } from "react-router-dom";

/* Layout */
import MainLayout from "../components/layout/MainLayout";

/* Public pages */
import Home from "../pages/Public/Home/Home";
import About from "../pages/Public/About/About";
import Contact from "../pages/Public/Contact/Contact";

/* Authentication pages */
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
import OTPVerification from "../pages/Auth/OTPVerification/OTPVerification";
import EmailVerification from "../pages/Auth/EmailVerification/EmailVerification";

/* User pages */
import Dashboard from "../pages/User/Dashboard/Dashboard";
import RoutePlanner from "../pages/User/RoutePlanner/RoutePlanner";
import Traffic from "../pages/User/Traffic/Traffic";
import BusTracking from "../pages/User/BusTracking/BusTracking";
import SavedRoutes from "../pages/User/SavedRoutes/SavedRoutes";
import Notifications from "../pages/User/Notifications/Notifications";
import Reports from "../pages/User/Reports/Reports";
import Profile from "../pages/User/Profile/Profile";
import Settings from "../pages/User/Settings/Settings";
import HelpCenter from "../pages/User/HelpCenter/HelpCenter";

/* Error page */
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public website */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route
          path="/email-verification"
          element={<EmailVerification />}
        />

        {/* User dashboard pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/route-planner" element={<RoutePlanner />} />
        <Route path="/traffic" element={<Traffic />} />
        <Route path="/bus-tracking" element={<BusTracking />} />
        <Route path="/saved-routes" element={<SavedRoutes />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help-center" element={<HelpCenter />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
