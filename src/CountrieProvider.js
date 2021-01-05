import { createContext, useContext, useState } from "react";

const CountrieContext = createContext();
export const useCountries = () => useContext(CountrieContext);

export const CountrieProvider = ({children}) => {

  const initialFilterState = {
    continent: 'america',
    countrie: 'dsadsa',
  }

  const [filter, setFilter] = useState(initialFilterState);

  const changeCountrie = ({target}) => {
    
    const { value: countrie } = target;    
    setFilter({...filter, countrie});
  }

  const changeContinent = ({target}) => {

    const { value: continent } = target;    
    setFilter({...filter, continent});
  };

  const [countries, setCountries] = useState([]);
  
  return (
    <CountrieContext.Provider value={ { filter, changeCountrie, changeContinent, countries}}>
      { children }
    </CountrieContext.Provider>
  );
};