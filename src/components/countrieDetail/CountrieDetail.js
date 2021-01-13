import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom';
import { useCountries } from '../../providers/CountrieProvider';
import {FaArrowLeft} from 'react-icons/fa';
import './CountrieDetail.css';

const CountrieDetail = ({history}) => {
  
  const { id } = useParams();

  const { countries } = useCountries();

  const countrie = useMemo(() => countries.find(currentCountrie => currentCountrie.alpha2Code === id), [id, countries])

  if(!countrie){
    return <h1> Loading...</h1>
  }

  const  {
    nativeName, 
    population,
    region, 
    subregion,
    capital,
    currencies,
    languages,
    borders: bordersCountries  
  } = countrie;
  
  const borderNames = [];

  bordersCountries.forEach(borderCountrie => {
    const { name } = countries.find(currentCountrie => currentCountrie.alpha3Code === borderCountrie);
    borderNames.push(name);
  });

  console.log(borderNames);

  return (
    <div>
      
      <button className="btn-back">
        <FaArrowLeft/>
        <span>Back</span>
      </button>
    </div>
  )
}

export default CountrieDetail;
