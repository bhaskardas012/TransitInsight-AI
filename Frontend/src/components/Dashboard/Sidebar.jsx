import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Route,
  Map,
  Bus,
  Bookmark,
  Bell,
  FileText,
  User,
  Settings,
  CircleHelp,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Route Planner",
    icon: Route,
    path: "/route-planner",
  },
  {
    title: "Live Traffic",
    icon: Map,
    path: "/traffic",
  },
  {
    title: "Bus Tracking",
    icon: Bus,
    path: "/bus-tracking",
  },
  {
    title: "Saved Routes",
    icon: Bookmark,
    path: "/saved-routes",
  },
  {
    title: "Notifications",
    icon: Bell,
    path: "/notifications",
  },
  {
    title: "Reports",
    icon: FileText,
    path: "/reports",
  },
  {
    title: "Profile",
    icon: User,
    path: "/profile",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
  {
    title: "Help Center",
    icon: CircleHelp,
    path: "/help-center",
  },
];

function Sidebar() {
  return (
    <aside className="flex min-h-screen w-72 flex-col border-r border-slate-800 bg-slate-950 p-5">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">
          TransitInsight
        </h1>

        <p className="text-sm text-cyan-400">
          AI Dashboard
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                [
                  "flex items-center gap-3 rounded-xl px-4 py-3",
                  "font-medium transition-all duration-200",
                  isActive
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white",
                ].join(" ")
              }
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}
      <button
        type="button"
        className="mt-6 flex items-center gap-3 rounded-xl px-4 py-3 font-medium text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </aside>
  );
}

export default Sidebar;
