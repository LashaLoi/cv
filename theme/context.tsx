import React, { createContext, useContext, useState } from "react";

export type Mode = "dark" | "light";

export type ThemeMode = {
  mode: Mode;
  darkMode: boolean;
  lightMode: boolean;
  toggleMode: () => void;
  setMode: (mode: Mode) => void;
};

export const ThemeModeContext = createContext<ThemeMode>({
  mode: "dark",
  darkMode: true,
  lightMode: false,
  setMode: () => {},
  toggleMode: () => {}
});

export const ThemeModeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<Mode>("dark");

  const toggleMode = () =>
    setMode(mode => (mode === "dark" ? "light" : "dark"));

  const handleSetMode = (mode: Mode) => setMode(mode);

  const value = {
    mode,
    toggleMode,
    setMode: handleSetMode,
    darkMode: mode === "dark",
    lightMode: mode === "light"
  };

  return (
    <ThemeModeContext.Provider value={value}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export const useThemeModeContext = () => useContext(ThemeModeContext);
