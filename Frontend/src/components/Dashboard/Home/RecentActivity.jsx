import {
  Bell,
  Bookmark,
  Clock3,
  FileText,
  Route,
} from "lucide-react";

import { useUserData } from "../../../context/UserDataContext";

const activityIcons = {
  "route-search": Route,
  "saved-route": Bookmark,
  report: FileText,
  notification: Bell,
};

function RecentActivity() {
  const { activities } = useUserData();

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-400">
            Your history
          </p>

          <h2 className="mt-1 text-xl font-bold text-white">
            Recent Activity
          </h2>
        </div>

        <Clock3 size={24} className="text-cyan-400" />
      </div>

      {activities.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-700 p-10 text-center">
          <Clock3
            size={38}
            className="mx-auto text-slate-600"
          />

          <p className="mt-4 font-semibold text-white">
            No recent activity
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Your route searches, saved routes, and reports
            will appear here.
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {activities.slice(0, 6).map((activity) => {
            const Icon =
              activityIcons[activity.type] || Clock3;

            return (
              <article
                key={activity.id}
                className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {activity.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {activity.description}
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    {new Date(
                      activity.createdAt
                    ).toLocaleString()}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default RecentActivity;
