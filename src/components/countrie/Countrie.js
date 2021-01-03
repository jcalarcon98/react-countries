import './Countrie.css';

const Countrie = () => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src="https://restcountries.eu/data/abw.svg" alt=""/>
      </div>
      <div className="card-text">
        <h3>United States of America</h3>
        <p>
          Population: <span>192873812</span>
        </p>
        <p>
          Region: <span>Europe</span>
        </p>
        <p>
          Capital: <span>Berlin</span>
        </p>
      </div>
    </div>
  )
};

export default Countrie;