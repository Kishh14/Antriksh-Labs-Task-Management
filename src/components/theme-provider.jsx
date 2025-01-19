import { createContext, useContext, useEffect, useState } from 'react';

// Theme context definition
const ThemeProviderContext = createContext();

// ThemeProvider component to manage theme state
export function ThemeProvider({ children, defaultTheme = "system", storageKey = "vite-ui-theme" }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(storageKey) || defaultTheme;
  });

  // Update the theme in localStorage and document class
  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
