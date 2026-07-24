import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("theme");

      if (savedTheme === "dark") {
        return true;
      }

      if (savedTheme === "light") {
        return false;
      }

      return true;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const rootElement = document.documentElement;

    if (darkMode) {
      rootElement.classList.add("dark");
      rootElement.style.colorScheme = "dark";

      localStorage.setItem("theme", "dark");
    } else {
      rootElement.classList.remove("dark");
      rootElement.style.colorScheme = "light";

      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((previousMode) => !previousMode);
  };

  const setDarkTheme = () => {
    setDarkMode(true);
  };

  const setLightTheme = () => {
    setDarkMode(false);
  };

  const value = useMemo(
    () => ({
      darkMode,
      theme: darkMode ? "dark" : "light",
      toggleTheme,
      setDarkTheme,
      setLightTheme,
    }),
    [darkMode]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}

export default ThemeContext;
