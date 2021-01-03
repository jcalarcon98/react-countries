import './App.css';
import { Countries, Filter, NavBar } from './components';

function App() {
  return (
    <>  
      <NavBar />
      <div className="main-container">
        <Filter />        
        <Countries /> 
      </div>
    </>
  );
}

export default App;