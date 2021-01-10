import { Countries, Filter, NavBar } from './components';
import { CountrieProvider } from './providers/CountrieProvider';
import './App.css';
import { ThemeColorProvider } from './providers/ThemeColorProvider';

function App() {
  return (
    <> 
      <ThemeColorProvider>
        <NavBar />
        <div className="main-container dark-mode">
          <CountrieProvider >
            <Filter />        
            <Countries /> 
          </CountrieProvider>        
        </div>
      </ThemeColorProvider>      
    </>
  );
}

export default App;