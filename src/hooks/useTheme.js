import { MyThemeContext } from "../context/CustomTheme";
import { useContext } from "react";

export const useTheme = () => useContext(MyThemeContext);
