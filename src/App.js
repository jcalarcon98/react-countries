import { Countries, Filter, NavBar } from './components';
import './App.css';

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