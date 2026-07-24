import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  Search,
  Settings,
  User,
  X,
} from "lucide-react";

import ThemeToggle from "../layout/ThemeToggle";
import { useUserData } from "../../context/UserDataContext";

function Topbar({ onMenuClick }) {
  const navigate = useNavigate();

  const {
    user,
    notifications,
    unreadNotifications,
    markNotificationRead,
  } = useUserData();

  const [searchText, setSearchText] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  const displayName = user?.name?.trim() || "User";
  const displayEmail = user?.email?.trim() || "No email added";
  const displayRole = user?.role || "User";

  const recentNotifications = notifications.slice(0, 5);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    const query = searchText.trim().toLowerCase();

    if (!query) {
      return;
    }

    const pageRoutes = [
      {
        keywords: ["dashboard", "home"],
        path: "/dashboard",
      },
      {
        keywords: ["route", "route planner", "plan route"],
        path: "/route-planner",
      },
      {
        keywords: ["traffic", "live traffic"],
        path: "/traffic",
      },
      {
        keywords: ["bus", "bus tracking", "track bus"],
        path: "/bus-tracking",
      },
      {
        keywords: ["saved", "saved routes", "bookmark"],
        path: "/saved-routes",
      },
      {
        keywords: ["notification", "notifications", "alerts"],
        path: "/notifications",
      },
      {
        keywords: ["report", "reports", "analytics"],
        path: "/reports",
      },
      {
        keywords: ["profile", "account"],
        path: "/profile",
      },
      {
        keywords: ["settings", "preferences"],
        path: "/settings",
      },
      {
        keywords: ["help", "support", "help center"],
        path: "/help-center",
      },
    ];

    const matchedPage = pageRoutes.find((page) =>
      page.keywords.some((keyword) => query.includes(keyword))
    );

    if (matchedPage) {
      navigate(matchedPage.path);
      setSearchText("");
    }
  };

  const handleNotificationClick = (notification) => {
    if (!notification.read) {
      markNotificationRead(notification.id);
    }

    setShowNotifications(false);

    switch (notification.type) {
      case "Traffic":
        navigate("/traffic");
        break;

      case "Route":
      case "Saved Route":
        navigate("/saved-routes");
        break;

      case "Report":
        navigate("/reports");
        break;

      case "Account":
        navigate("/profile");
        break;

      default:
        navigate("/notifications");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("authToken");

    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 px-4 py-4 backdrop-blur-xl sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Open dashboard menu"
            className="inline-flex rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400 lg:hidden"
          >
            <Menu size={21} />
          </button>

          <div className="hidden min-w-0 sm:block">
            <p className="text-sm text-slate-400">
              Welcome back
            </p>

            <h1 className="truncate text-lg font-bold text-white">
              {displayName}
            </h1>
          </div>

          <form
            onSubmit={handleSearch}
            className="relative ml-0 w-full max-w-xl sm:ml-4"
          >
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Search pages..."
              className="w-full rounded-xl border border-slate-800 bg-slate-900 py-3 pl-11 pr-10 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"
            />

            {searchText && (
              <button
                type="button"
                onClick={() => setSearchText("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
              >
                <X size={17} />
              </button>
            )}
          </form>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <div
            ref={notificationRef}
            className="relative"
          >
            <button
              type="button"
              onClick={() => {
                setShowNotifications(
                  (previousState) => !previousState
                );
                setShowProfileMenu(false);
              }}
              aria-label="Open notifications"
              className="relative rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
            >
              <Bell size={20} />

              {unreadNotifications > 0 && (
                <span className="absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                  {unreadNotifications > 99
                    ? "99+"
                    : unreadNotifications}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-3 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/30">
                <div className="flex items-center justify-between border-b border-slate-800 p-4">
                  <div>
                    <p className="font-semibold text-white">
                      Notifications
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {unreadNotifications} unread
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setShowNotifications(false);
                      navigate("/notifications");
                    }}
                    className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                  >
                    View all
                  </button>
                </div>

                {recentNotifications.length === 0 ? (
                  <div className="p-8 text-center">
                    <Bell
                      size={34}
                      className="mx-auto text-slate-600"
                    />

                    <p className="mt-3 font-medium text-white">
                      No notifications
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Your alerts will appear here.
                    </p>
                  </div>
                ) : (
                  <div className="max-h-96 overflow-y-auto">
                    {recentNotifications.map((notification) => (
                      <button
                        key={notification.id}
                        type="button"
                        onClick={() =>
                          handleNotificationClick(notification)
                        }
                        className={`block w-full border-b border-slate-800 p-4 text-left transition last:border-b-0 hover:bg-slate-800/60 ${
                          notification.read
                            ? "bg-slate-900"
                            : "bg-cyan-500/5"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                              notification.read
                                ? "bg-slate-600"
                                : "bg-cyan-400"
                            }`}
                          />

                          <div className="min-w-0">
                            <p className="truncate font-semibold text-white">
                              {notification.title || "Notification"}
                            </p>

                            <p className="mt-1 line-clamp-2 text-sm text-slate-400">
                              {notification.message ||
                                notification.description ||
                                "No additional details."}
                            </p>

                            <p className="mt-2 text-xs text-slate-500">
                              {formatDate(notification.createdAt)}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div
            ref={profileRef}
            className="relative"
          >
            <button
              type="button"
              onClick={() => {
                setShowProfileMenu(
                  (previousState) => !previousState
                );
                setShowNotifications(false);
              }}
              className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-2 transition hover:border-cyan-500"
            >
              {user?.profileImage ? (
                <img
                  src={user.profileImage}
                  alt={displayName}
                  className="h-9 w-9 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                  <User size={19} />
                </div>
              )}

              <div className="hidden min-w-0 text-left lg:block">
                <p className="max-w-32 truncate text-sm font-semibold text-white">
                  {displayName}
                </p>

                <p className="text-xs text-slate-500">
                  {displayRole}
                </p>
              </div>

              <ChevronDown
                size={16}
                className="hidden text-slate-500 lg:block"
              />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/30">
                <div className="border-b border-slate-800 p-4">
                  <p className="truncate font-semibold text-white">
                    {displayName}
                  </p>

                  <p className="mt-1 truncate text-sm text-slate-400">
                    {displayEmail}
                  </p>

                  <span className="mt-3 inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {displayRole}
                  </span>
                </div>

                <div className="p-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowProfileMenu(false);
                      navigate("/profile");
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
                  >
                    <User size={18} />
                    My Profile
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setShowProfileMenu(false);
                      navigate("/settings");
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
                  >
                    <Settings size={18} />
                    Settings
                  </button>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-red-300 transition hover:bg-red-500/10"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

function formatDate(dateValue) {
  if (!dateValue) {
    return "Recently";
  }

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return "Recently";
  }

  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default Topbar;
