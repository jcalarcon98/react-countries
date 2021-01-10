import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeColorProvider = ({children}) => {

  const [theme, setTheme] = useState(false);
  
  return (
    <ThemeContext.Provider value={ {theme, setTheme} }>
      { children }
    </ThemeContext.Provider>
  )
};