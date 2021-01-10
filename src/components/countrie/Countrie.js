import { useTheme } from '../../providers/ThemeColorProvider';
import './Countrie.css';

const Countrie = ({
  name,
  population,
  region,
  capital,
  flag
}) => {

  const { theme } = useTheme();

  return (
    <div className={`card-container ${theme ? "dark-mode" : "light-mode"}`}>
      <div className="card-image">
        <img src={ flag } alt="name" className='img'/>
      </div>
      <div className={`card-text ${theme ? "dark-text" : "light-text"}`}>
        <h3>{ name }</h3>
        <p>
          Population: <span className={`${theme ? 'dark-span' : 'light-span'}`}>{ population }</span>
        </p>
        <p>
          Region: <span className={`${theme ? 'dark-span' : 'light-span'}`}>{ region }</span>
        </p>
        <p>
          Capital: <span className={`${theme ? 'dark-span' : 'light-span'}`}>{ capital }</span>
        </p>
      </div>
    </div>
  )
};

export default Countrie;