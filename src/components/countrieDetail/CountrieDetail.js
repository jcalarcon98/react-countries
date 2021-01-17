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
    topLevelDomain,
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
  
  let countriCurrencies;
  let currentLanguages;

  const borderNames = [];

  if(bordersCountries.length > 0){
    bordersCountries.forEach(borderCountrie => {
      const { name } = countries.find(currentCountrie => currentCountrie.alpha3Code === borderCountrie);
      borderNames.push(name);
    });
  }

  if ( currencies.length > 0){
    const currencieArray =   currencies.map(currencie => currencie.name);
    countriCurrencies = currencieArray.join(',');
  }  

  if (languages.length > 0) {
    const languagesArray =   languages.map(language => language.name);
    currentLanguages = languagesArray.join(', ');
  }

  console.log(borderNames);

  return (
    <div>
      <button className={`btn-back ${theme ? "dark-text dark-mode" : "light-text light-mode"}`}>
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
                Top Level Domain: <span>{ topLevelDomain.join(',') }</span>
              </p>
              <p>
                Currencies: <span>{ countriCurrencies || 'NO DATA'}</span>
              </p>
              <p>
                Languages: <span>{ currentLanguages || 'NO LANGUAGES' }</span>
              </p>
            </div>
          </div>

          <div className="border-countries-container">
            <span>Border Countries:</span>
            {
              borderNames.map((border, index) => <div key={ index } className={`border-countrie ${theme ? "dark-mode" : "light-mode"}`}>{ border }</div>)
            }
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default CountrieDetail;
