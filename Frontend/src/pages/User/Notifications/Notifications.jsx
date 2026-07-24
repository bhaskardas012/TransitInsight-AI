import { useMemo, useState } from "react";
import {
  Bell,
  BellRing,
  CheckCheck,
  CircleAlert,
  Clock3,
  Filter,
  Info,
  Search,
  Trash2,
  TriangleAlert,
} from "lucide-react";

import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import { useUserData } from "../../../context/UserDataContext";

function Notifications() {
  const {
    notifications,
    setNotifications,
    markNotificationRead,
    unreadNotifications,
  } = useUserData();

  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredNotifications = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return notifications.filter((notification) => {
      const matchesSearch =
        !searchText ||
        [notification.title, notification.message, notification.type]
          .filter(Boolean)
          .some((value) =>
            value.toLowerCase().includes(searchText)
          );

      const matchesFilter =
        selectedFilter === "All" ||
        (selectedFilter === "Unread" && !notification.read) ||
        notification.type === selectedFilter;

      return matchesSearch && matchesFilter;
    });
  }, [notifications, search, selectedFilter]);

  const handleMarkAllRead = () => {
    setNotifications((previousNotifications) =>
      previousNotifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const handleDeleteNotification = (notificationId) => {
    setNotifications((previousNotifications) =>
      previousNotifications.filter(
        (notification) => notification.id !== notificationId
      )
    );
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <section className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                <BellRing size={18} />
                Personal alerts
              </div>

              <h1 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                My Notifications
              </h1>

              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                View traffic alerts, route updates, saved-route messages, and
                account notifications created for your activity.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-4">
              <p className="text-sm text-slate-400">
                Unread notifications
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {unreadNotifications}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex flex-col justify-between gap-5 xl:flex-row xl:items-center">
            <div>
              <p className="text-sm font-medium text-cyan-400">
                Notification center
              </p>

              <h2 className="mt-1 text-2xl font-bold text-white">
                Your Alerts
              </h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search notifications"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500 sm:w-64"
                />
              </div>

              <div className="relative">
                <Filter
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <select
                  value={selectedFilter}
                  onChange={(event) =>
                    setSelectedFilter(event.target.value)
                  }
                  className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-10 text-sm text-white outline-none focus:border-cyan-500 sm:w-48"
                >
                  <option value="All">All notifications</option>
                  <option value="Unread">Unread only</option>
                  <option value="Traffic">Traffic</option>
                  <option value="Route">Route</option>
                  <option value="Saved Route">Saved Route</option>
                  <option value="Report">Report</option>
                  <option value="Account">Account</option>
                </select>
              </div>
            </div>
          </div>

          {notifications.length > 0 && (
            <div className="mt-5 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={handleMarkAllRead}
                disabled={unreadNotifications === 0}
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <CheckCheck size={16} />
                Mark All Read
              </button>

              <button
                type="button"
                onClick={handleClearAll}
                className="inline-flex items-center gap-2 rounded-xl border border-red-500/30 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/10"
              >
                <Trash2 size={16} />
                Clear All
              </button>
            </div>
          )}

          {filteredNotifications.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-slate-700 p-12 text-center">
              <Bell
                size={42}
                className="mx-auto text-slate-600"
              />

              <h3 className="mt-4 font-semibold text-white">
                {notifications.length === 0
                  ? "No notifications yet"
                  : "No matching notifications"}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {notifications.length === 0
                  ? "Alerts related to your routes, reports, traffic checks, and account activity will appear here."
                  : "Change the search text or selected filter."}
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {filteredNotifications.map((notification) => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                  onMarkRead={markNotificationRead}
                  onDelete={handleDeleteNotification}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </DashboardLayout>
  );
}

function NotificationCard({
  notification,
  onMarkRead,
  onDelete,
}) {
  const Icon = getNotificationIcon(notification.type);

  return (
    <article
      className={`rounded-2xl border p-5 transition ${
        notification.read
          ? "border-slate-800 bg-slate-950/60"
          : "border-cyan-500/30 bg-cyan-500/5"
      }`}
    >
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
        <div className="flex items-start gap-4">
          <div
            className={`rounded-xl p-3 ${getNotificationStyle(
              notification.type
            )}`}
          >
            <Icon size={21} />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-semibold text-white">
                {notification.title || "Notification"}
              </h3>

              {!notification.read && (
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                  New
                </span>
              )}

              {notification.type && (
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
                  {notification.type}
                </span>
              )}
            </div>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              {notification.message ||
                notification.description ||
                "No additional details are available."}
            </p>

            <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
              <Clock3 size={14} />
              {formatDate(notification.createdAt)}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {!notification.read && (
            <button
              type="button"
              onClick={() => onMarkRead(notification.id)}
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500 hover:text-white"
            >
              <CheckCheck size={16} />
              Mark Read
            </button>
          )}

          <button
            type="button"
            onClick={() => onDelete(notification.id)}
            className="inline-flex items-center gap-2 rounded-xl border border-red-500/30 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/10"
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

function getNotificationIcon(type) {
  switch (type) {
    case "Traffic":
      return TriangleAlert;
    case "Route":
      return CircleAlert;
    case "Saved Route":
      return BellRing;
    case "Report":
      return Info;
    case "Account":
      return Bell;
    default:
      return Info;
  }
}

function getNotificationStyle(type) {
  switch (type) {
    case "Traffic":
      return "bg-red-500/10 text-red-300";
    case "Route":
      return "bg-amber-500/10 text-amber-300";
    case "Saved Route":
      return "bg-cyan-500/10 text-cyan-300";
    case "Report":
      return "bg-violet-500/10 text-violet-300";
    case "Account":
      return "bg-blue-500/10 text-blue-300";
    default:
      return "bg-slate-800 text-slate-300";
  }
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
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default Notifications;
