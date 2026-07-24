import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const UserDataContext = createContext(null);

const defaultUser = {
  id: "user-001",
  name: "User",
  email: "",
  role: "User",
  profileImage: "",
  location: "",
  phone: "",
  emailVerified: false,
};

function readStoredData(key, fallbackValue) {
  try {
    const storedValue = localStorage.getItem(key);

    return storedValue
      ? JSON.parse(storedValue)
      : fallbackValue;
  } catch {
    return fallbackValue;
  }
}

export function UserDataProvider({ children }) {
  const [user, setUser] = useState(() =>
    readStoredData("transitInsightUser", defaultUser)
  );

  const [routeHistory, setRouteHistory] = useState(() =>
    readStoredData("transitInsightRouteHistory", [])
  );

  const [savedRoutes, setSavedRoutes] = useState(() =>
    readStoredData("transitInsightSavedRoutes", [])
  );

  const [notifications, setNotifications] = useState(() =>
    readStoredData("transitInsightNotifications", [])
  );

  const [reports, setReports] = useState(() =>
    readStoredData("transitInsightReports", [])
  );

  const [activities, setActivities] = useState(() =>
    readStoredData("transitInsightActivities", [])
  );

  useEffect(() => {
    localStorage.setItem(
      "transitInsightUser",
      JSON.stringify(user)
    );
  }, [user]);

  useEffect(() => {
    localStorage.setItem(
      "transitInsightRouteHistory",
      JSON.stringify(routeHistory)
    );
  }, [routeHistory]);

  useEffect(() => {
    localStorage.setItem(
      "transitInsightSavedRoutes",
      JSON.stringify(savedRoutes)
    );
  }, [savedRoutes]);

  useEffect(() => {
    localStorage.setItem(
      "transitInsightNotifications",
      JSON.stringify(notifications)
    );
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem(
      "transitInsightReports",
      JSON.stringify(reports)
    );
  }, [reports]);

  useEffect(() => {
    localStorage.setItem(
      "transitInsightActivities",
      JSON.stringify(activities)
    );
  }, [activities]);

  const addActivity = ({
    type,
    title,
    description,
  }) => {
    const activity = {
      id: crypto.randomUUID(),
      type,
      title,
      description,
      createdAt: new Date().toISOString(),
    };

    setActivities((previousActivities) => [
      activity,
      ...previousActivities,
    ].slice(0, 50));
  };

  const addRouteHistory = (route) => {
    const historyItem = {
      ...route,
      id: crypto.randomUUID(),
      searchedAt: new Date().toISOString(),
    };

    setRouteHistory((previousRoutes) => {
      const routesWithoutDuplicate =
        previousRoutes.filter(
          (existingRoute) =>
            !(
              existingRoute.from.toLowerCase() ===
                route.from.toLowerCase() &&
              existingRoute.to.toLowerCase() ===
                route.to.toLowerCase()
            )
        );

      return [
        historyItem,
        ...routesWithoutDuplicate,
      ].slice(0, 10);
    });

    addActivity({
      type: "route-search",
      title: "Route searched",
      description: `${route.from} to ${route.to}`,
    });
  };

  const saveRoute = (route) => {
    const alreadySaved = savedRoutes.some(
      (savedRoute) =>
        savedRoute.from === route.from &&
        savedRoute.to === route.to &&
        savedRoute.name === route.name
    );

    if (alreadySaved) {
      return false;
    }

    const savedRoute = {
      ...route,
      id: crypto.randomUUID(),
      savedAt: new Date().toISOString(),
    };

    setSavedRoutes((previousRoutes) => [
      savedRoute,
      ...previousRoutes,
    ]);

    addActivity({
      type: "saved-route",
      title: "Route saved",
      description: `${route.from} to ${route.to}`,
    });

    return true;
  };

  const removeSavedRoute = (routeId) => {
    setSavedRoutes((previousRoutes) =>
      previousRoutes.filter(
        (route) => route.id !== routeId
      )
    );
  };

  const addReport = (report) => {
    const newReport = {
      ...report,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      status: "Ready",
    };

    setReports((previousReports) => [
      newReport,
      ...previousReports,
    ]);

    addActivity({
      type: "report",
      title: "Report generated",
      description: newReport.title,
    });
  };

  const removeReport = (reportId) => {
    setReports((previousReports) =>
      previousReports.filter(
        (report) => report.id !== reportId
      )
    );
  };

  const markNotificationRead = (notificationId) => {
    setNotifications((previousNotifications) =>
      previousNotifications.map((notification) =>
        notification.id === notificationId
          ? {
              ...notification,
              read: true,
            }
          : notification
      )
    );
  };

  const unreadNotifications = notifications.filter(
    (notification) => !notification.read
  ).length;

  const value = useMemo(
    () => ({
      user,
      setUser,

      routeHistory,
      setRouteHistory,
      addRouteHistory,

      savedRoutes,
      saveRoute,
      removeSavedRoute,

      notifications,
      setNotifications,
      markNotificationRead,
      unreadNotifications,

      reports,
      setReports,
      addReport,
      removeReport,

      activities,
      addActivity,
    }),
    [
      user,
      routeHistory,
      savedRoutes,
      notifications,
      unreadNotifications,
      reports,
      activities,
    ]
  );

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  const context = useContext(UserDataContext);

  if (!context) {
    throw new Error(
      "useUserData must be used inside UserDataProvider"
    );
  }

  return context;
}

export default UserDataContext;
