import { FaRegMoon } from "react-icons/fa";
import './NavBar.css';

const NavBar = () => {

  const handleDarkMode = () => console.log('Dark mode is disable');

  return (
    
    <div className="navbar">

      <div className="text">
        Where in the World?
      </div>

      <div onClick={ handleDarkMode } className="dark-mode">
        <FaRegMoon />
        <div className="text-dark">Dark Mode</div>
      </div>
    </div>

  );

};


export default NavBar;