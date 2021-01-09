import axios from 'axios';

export async function getCountriesByContinent(continent = 'europe'){

  const URL = `https://restcountries.eu/rest/v2/region/${continent}`;
  
  try {
    const { data: countries } = await axios.get(URL);
    return countries;

  } catch (error) {
    console.log("🚀 ~ file: index.js ~ line 13 ~ getCountriesByContinent ~ error", error)
  }
}