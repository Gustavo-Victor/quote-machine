import { useState, useEffect, useCallback } from "react";
import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/theme";

export const MyThemeContext = createContext();

export default function CustomTheme({ children }) {
  const [theme, setTheme] = useState({ ...defaultTheme });

  const setNewTheme = () => {
    // let color = "#";
    // let letters = "0123456789ABCDEF";

    // for (let i = 0; i < 6; i++) {
    //     color += letters[Math.floor(Math.random() * 16)];
    // }
    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];
    let color = colors[Math.floor(Math.random() * 12)];
    setTheme({ color: color });
  };

  // const myCallback = useCallback(() => {
  //     setNewTheme();
  // }, [theme]);
  useEffect(() => {
    setNewTheme();
  }, []);

  return (
    <MyThemeContext.Provider value={{ setNewTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MyThemeContext.Provider>
  );
}
