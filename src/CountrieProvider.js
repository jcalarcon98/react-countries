import { createContext, useState } from "react";

const CountrieContext = createContext();

export const ColorProvider = ({children}) => {

  const [countries, setCountries] = useState([]);
  
  return (
    <CountrieContext.Provider value={ {countries, setCountries}}>
      { children }
    </CountrieContext.Provider>
  );
};