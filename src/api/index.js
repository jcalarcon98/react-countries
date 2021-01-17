import axios from 'axios';

const baseURL = 'https://restcountries.eu/rest/v2';

export async function getAllCountries(){

  const URL = `${baseURL}/all`;
  
  try {
    const { data: countries } = await axios.get(URL);
    console.log(countries);
    return countries;

  } catch (error) {
    console.log("🚀 ~ file: index.js ~ line 13 ~ getCountriesByContinent ~ error", error)
  }
}

export async function getCountriesByContinent(continent = 'europe'){

  const URL = `${baseURL}/region/${continent}`;
  
  try {
    const { data: countries } = await axios.get(URL);
    return countries;

  } catch (error) {
    console.log("🚀 ~ file: index.js ~ line 13 ~ getCountriesByContinent ~ error", error)
  }
}

export async function getCountrieByCode(code){

  if(!code) return;

  const URL =  `${baseURL}/alpha/${code}`;
  
  try {
    
    const { data: countrie} = await axios.get(URL);
    
    return countrie;

  } catch (error) {
    console.log(error);
  }

} 