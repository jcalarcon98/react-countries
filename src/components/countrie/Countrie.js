import './Countrie.css';

const Countrie = ({
  name,
  population,
  region,
  capital,
  flag
}) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={ flag } alt="name" className='img'/>
      </div>
      <div className="card-text">
        <h3>{ name }</h3>
        <p>
          Population: <span>{ population }</span>
        </p>
        <p>
          Region: <span>{ region }</span>
        </p>
        <p>
          Capital: <span>{ capital }</span>
        </p>
      </div>
    </div>
  )
};

export default Countrie;