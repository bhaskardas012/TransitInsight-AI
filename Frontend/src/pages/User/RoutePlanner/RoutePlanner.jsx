import { useState } from "react";

import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import SearchPanel from "../../../components/RoutePlanner/SearchPanel";
import RouteResults from "../../../components/RoutePlanner/RouteResults";
import MapView from "../../../components/RoutePlanner/MapView";
import Filters from "../../../components/RoutePlanner/Filters";
import RecentRoutes from "../../../components/RoutePlanner/RecentRoutes";

import { useUserData } from "../../../context/UserDataContext";

const routeTemplates = [
  {
    id: 1,
    name: "Fastest Route",
    duration: 42,
    distance: 18.4,
    fare: 35,
    walking: 6,
    traffic: "Low",
    busType: "Standard",
    busNumber: "B-12",
  },
  {
    id: 2,
    name: "Cheapest Route",
    duration: 51,
    distance: 21.2,
    fare: 28,
    walking: 10,
    traffic: "Moderate",
    busType: "Standard",
    busNumber: "B-08",
  },
  {
    id: 3,
    name: "Low Walking Route",
    duration: 57,
    distance: 23.5,
    fare: 32,
    walking: 4,
    traffic: "Low",
    busType: "AC",
    busNumber: "B-17",
  },
  {
    id: 4,
    name: "AC Bus Route",
    duration: 49,
    distance: 20.1,
    fare: 45,
    walking: 7,
    traffic: "Moderate",
    busType: "AC",
    busNumber: "AC-04",
  },
];

function RoutePlanner() {
  const [hasSearched, setHasSearched] = useState(false);
  const [routes, setRoutes] = useState([]);
  const [selectedJourney, setSelectedJourney] = useState(null);

  const {
    routeHistory,
    setRouteHistory,
    addRouteHistory,
  } = useUserData();

  const [filters, setFilters] = useState({
    fastest: true,
    cheapest: false,
    lessTraffic: false,
    lessWalking: false,
    acBus: false,
  });

  const generateRoutes = (searchData) => {
    return routeTemplates.map((route) => ({
      ...route,

      from: searchData.from,
      to: searchData.to,
      date: searchData.date,
      time: searchData.time,

      durationText: `${route.duration} min`,
      distanceText: `${route.distance} km`,
      fareText: `₹${route.fare}`,
      walkingText: `${route.walking} min`,

      details: `${route.busNumber}: ${searchData.from} → ${searchData.to}`,
    }));
  };

  const applyFilters = (generatedRoutes) => {
    let filteredRoutes = [...generatedRoutes];

    if (filters.acBus) {
      filteredRoutes = filteredRoutes.filter(
        (route) => route.busType === "AC"
      );
    }

    if (filters.lessTraffic) {
      filteredRoutes = filteredRoutes.filter(
        (route) => route.traffic === "Low"
      );
    }

    if (filters.fastest) {
      filteredRoutes.sort(
        (firstRoute, secondRoute) =>
          firstRoute.duration - secondRoute.duration
      );
    } else if (filters.cheapest) {
      filteredRoutes.sort(
        (firstRoute, secondRoute) =>
          firstRoute.fare - secondRoute.fare
      );
    } else if (filters.lessWalking) {
      filteredRoutes.sort(
        (firstRoute, secondRoute) =>
          firstRoute.walking - secondRoute.walking
      );
    }

    return filteredRoutes;
  };

  const handleSearch = (searchData) => {
    const cleanSearchData = {
      from: searchData.from.trim(),
      to: searchData.to.trim(),
      date: searchData.date || "",
      time: searchData.time || "",
    };

    if (!cleanSearchData.from || !cleanSearchData.to) {
      return;
    }

    setSelectedJourney(cleanSearchData);

    const generatedRoutes = generateRoutes(cleanSearchData);
    const filteredRoutes = applyFilters(generatedRoutes);

    setRoutes(filteredRoutes);
    setHasSearched(true);

    addRouteHistory(cleanSearchData);
  };

  const handleRecentRoute = (route) => {
    handleSearch({
      from: route.from,
      to: route.to,
      date: route.date || "",
      time: route.time || "",
    });
  };

  const handleClearHistory = () => {
    setRouteHistory([]);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <SearchPanel onSearch={handleSearch} />

        <div className="grid gap-8 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <MapView selectedJourney={selectedJourney} />
          </div>

          <Filters
            filters={filters}
            setFilters={setFilters}
          />
        </div>

        <RouteResults
          routes={routes}
          hasSearched={hasSearched}
        />

        <RecentRoutes
          routes={routeHistory}
          onSelectRoute={handleRecentRoute}
          onClearHistory={handleClearHistory}
        />
      </div>
    </DashboardLayout>
  );
}

export default RoutePlanner;
