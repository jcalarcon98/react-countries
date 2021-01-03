import  { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import './Filter.css';

const Filter = () => {
  return (
    <div className="filter-container">
      <div className="search-input-container">

        <IconContext.Provider value={{ color: "gray", className: "global-class-name" }}>
          <div className="search-icon">
            <FaSearch />
          </div>
        </IconContext.Provider>
        <input type='text' className="search-input" placeholder='Search for a country...'/>
      </div>
      <div className="filter-dropdow-box">
        <select className='select' name="continents" id="continents">
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