
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useCountries } from '../../CountrieProvider';
import './Filter.css';

const Filter = () => {

  const { filter, changeCountrie, changeContinent } = useCountries();
  const { continent, countrie } = filter;

  return (
    <div className="filter-container">
      <div className="search-input-container">

        <IconContext.Provider value={{ color: "gray", className: "global-class-name" }}>
          <div className="search-icon">
            <FaSearch />
          </div>
        </IconContext.Provider>
        <input value={ countrie } onChange={ changeCountrie } type='text' className="search-input" placeholder='Search for a country...'/>
      </div>
      <div className="filter-dropdow-box">
        <select value={ continent } onChange={ changeContinent } className='select' name="continents" id="continents">
          <option value="africa">África</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europa</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
};

export default Filter;