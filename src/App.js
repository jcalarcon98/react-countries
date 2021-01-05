import { Countries, Filter, NavBar } from './components';
import './App.css';
import { CountrieProvider } from './CountrieProvider';

function App() {
  return (
    <>  
      <NavBar />
      <div className="main-container">
        <CountrieProvider >
          <Filter />        
          <Countries /> 
        </CountrieProvider>        
      </div>
    </>
  );
}

export default App;