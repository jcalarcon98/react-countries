import { FaMoon } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useTheme } from "../../providers/ThemeColorProvider";
import './NavBar.css';

const NavBar = () => {

  const { theme, setTheme} = useTheme();

  const handleDarkMode = () => {
    
    document.body.className = !theme ? "dark-body" : "light-body";
    setTheme(!theme);
  }
  return (
    
    <div className={ `navbar ${ theme ? 'dark-mode': 'light-mode'}` }>

      <div className={`text ${ theme ? 'dark-text': 'light-text'}` }>
        Where in the World?
      </div>

      <div onClick={ handleDarkMode } className="dark-toggle">
        <IconContext.Provider value={{color : theme ? 'white': 'black' }}>
          <FaMoon />
        </IconContext.Provider>
        <div className={ `text-dark ${ theme ? 'dark-text': 'light-text'}`}>Dark Mode</div>
      </div>
    </div>

  );
};

export default NavBar;