import { Countries, Filter, NavBar } from "./components";
import { CountrieProvider } from "./providers/CountrieProvider";
import { ThemeColorProvider } from "./providers/ThemeColorProvider";
import "./App.css";

function App() {

  return (
      <ThemeColorProvider>
        <NavBar />
        <div className="main-container">
          <CountrieProvider>
            <Filter />
            <Countries />
          </CountrieProvider>
        </div>
      </ThemeColorProvider>
  );
}

export default App;
