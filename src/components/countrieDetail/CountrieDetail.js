import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom';
import { useCountries } from '../../providers/CountrieProvider';
import {FaArrowLeft} from 'react-icons/fa';
import './CountrieDetail.css';
import { useTheme } from '../../providers/ThemeColorProvider';

const CountrieDetail = ({history}) => {
  
  const { id } = useParams();
  const { countries } = useCountries();
  const { theme } = useTheme();
  const countrie = useMemo(() => countries.find(currentCountrie => currentCountrie.alpha2Code === id), [id, countries]);

  if(!countrie){
    return <h1> Loading...</h1>
  }

  const  {
    flag,
    name,
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
      <div className="flag-text-container">
        <img className="img-flag" src={flag} alt=""/>
        <div className={`text-section  ${theme ? "dark-text" : "light-text"}`}>
          <h2>{ name }</h2>

          <div className='information-text'>
            <div className='left-section-text'>
              <p>
                Native Name: <span>{ nativeName }</span>
              </p>
              <p>
                Population: <span>{ population }</span>
              </p>
              <p>
                Region: <span>{ region }</span>
              </p>
              <p>
                Sub Region: <span>{ subregion }</span>
              </p>
              <p>
                Capital: <span>{ capital }</span>
              </p>
            </div>
            <div className="right-section-text">
              <p>
                Top Level Domain: <span>FIX</span>
              </p>
              <p>
                Currencies: <span>FIX</span>
              </p>
              <p>
                Languages: <span>FIX</span>
              </p>
            </div>
          </div>

          <div>
            <span>Border Countries:</span>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default CountrieDetail;
