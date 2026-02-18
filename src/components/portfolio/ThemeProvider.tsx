import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type ThemeMode = "dark" | "light";
export type ThemeColor = "emerald" | "blue" | "violet" | "orange" | "rose";

interface ThemeContextType {
  mode: ThemeMode;
  color: ThemeColor;
  setMode: (m: ThemeMode) => void;
  setColor: (c: ThemeColor) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: "dark",
  color: "emerald",
  setMode: () => {},
  setColor: () => {},
});

export const useThemeConfig = () => useContext(ThemeContext);

export const colorTokens: Record<ThemeColor, { primary: string; label: string; hex: string }> = {
  emerald: { primary: "160 84% 39%", label: "Emerald", hex: "#0d9268" },
  blue:    { primary: "217 91% 60%", label: "Blue",    hex: "#3b82f6" },
  violet:  { primary: "263 70% 60%", label: "Violet",  hex: "#8b5cf6" },
  orange:  { primary: "25 95% 53%",  label: "Orange",  hex: "#f97316" },
  rose:    { primary: "346 77% 58%", label: "Rose",    hex: "#f43f5e" },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    return (localStorage.getItem("theme-mode") as ThemeMode) || "dark";
  });
  const [color, setColorState] = useState<ThemeColor>(() => {
    return (localStorage.getItem("theme-color") as ThemeColor) || "emerald";
  });

  const setMode = (m: ThemeMode) => {
    setModeState(m);
    localStorage.setItem("theme-mode", m);
  };

  const setColor = (c: ThemeColor) => {
    setColorState(c);
    localStorage.setItem("theme-color", c);
  };

  useEffect(() => {
    const root = document.documentElement;
    // Apply dark/light
    if (mode === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    // Apply color
    const token = colorTokens[color];
    root.style.setProperty("--primary", token.primary);
    root.style.setProperty("--accent", token.primary);
    root.style.setProperty("--ring", token.primary);
    root.style.setProperty("--sidebar-primary", token.primary);
    root.style.setProperty("--sidebar-ring", token.primary);
  }, [mode, color]);

  return (
    <ThemeContext.Provider value={{ mode, color, setMode, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
