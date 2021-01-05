import { useState } from 'react';
import  { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import './Filter.css';

const Filter = () => {

  const initialState = {
    continent: 'america',
    countrie: 'dsadsa',
  }

  const [filter, setFilter] = useState(initialState);

  const { continent, countrie } = filter;

  const handleInputChange = ({target}) => {
    
    const { value } = target;

    const newState = {
      continent,
      countrie: value
    }
    
    setFilter(newState);

    console.log(filter);

  }

  const handleSelectChange = ({target}) => {

    const { value } = target;
    
    const newState = {
      continent: value,
      countrie
    }

    setFilter(newState);

    console.log(filter);
  };


  return (
    <div className="filter-container">
      <div className="search-input-container">

        <IconContext.Provider value={{ color: "gray", className: "global-class-name" }}>
          <div className="search-icon">
            <FaSearch />
          </div>
        </IconContext.Provider>
        <input value={ countrie } onChange={ handleInputChange } type='text' className="search-input" placeholder='Search for a country...'/>
      </div>
      <div className="filter-dropdow-box">
        <select value={ continent } onChange={ handleSelectChange } className='select' name="continents" id="continents">
          <option value="africa">África</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europa">Europa</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
};

export default Filter;