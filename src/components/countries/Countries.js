import { useCountries } from '../../CountrieProvider';
import { Alert } from '../alert/Alert';
import Countrie from '../countrie/Countrie';

import './Countries.css';

const Countries = () => {

  const  { filter, countries } = useCountries();

  const  {continent, countrie} = filter;
  return (
    <div className={countries.length === 1 ? "container container-one" : "container"}>
      {
        countries.length === 0 && 
        <Alert message={`There isn't any countrie with the name ${countrie} in ${continent.toUpperCase()} continent`}/>
      }

      {
        countries.map( countrie => (
          <Countrie
            key={countrie.alpha2Code}
            {...countrie} 
            />
        ))
      }

    </div>
  )
}

export default Countries;