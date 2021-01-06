import { createContext, useContext, useEffect, useState } from "react";
import { getCountriesByContinent } from "./api";
import { useFilter } from "./hooks/useFilter";

const CountrieContext = createContext();

export const useCountries = () => useContext(CountrieContext);

export const CountrieProvider = ({children}) => {

  const initialFilterState = {
    continent: 'americas',
    countrie: '',
  }
  const { filter, changeCountrie, changeContinent } = useFilter(initialFilterState);
  
  const { continent, countrie } = filter;

  const [countries, setCountries] = useState([]);

  const [currentCountries, setCurrentCountries] = useState([]);

  useEffect(() => {

    setCountries(currentCountries.filter(currentCountrie => currentCountrie.name.includes(countrie)));

  }, [currentCountries, countrie]);

  
  useEffect(() => {
    
    const fetchCountries = async() => {

      const fetchedCountries = await getCountriesByContinent(continent);
      setCurrentCountries(fetchedCountries);
      setCountries(fetchedCountries);
    };

    fetchCountries();

  }, [continent]);

  return (
    <CountrieContext.Provider value={ { filter, changeCountrie, changeContinent, countries}}>
      { children }
    </CountrieContext.Provider>
  );
};