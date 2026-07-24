import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";
import "leaflet/dist/leaflet.css";

import { ThemeProvider } from "./context/ThemeContext";
import { UserDataProvider } from "./context/UserDataContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <UserDataProvider>
        <App />
      </UserDataProvider>
    </ThemeProvider>
  </StrictMode>
);
