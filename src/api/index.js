import axios from 'axios';


export async function getCountriesByContinent(continent = 'europe'){

  const URL = `https://restcountries.eu/rest/v2/region/${continent}`;
  
  try {
    
    const { data } = await axios.get(URL);
    return data;

  } catch (error) {
    
    console.log(error);
  }
}