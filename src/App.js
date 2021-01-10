import { Countries, Filter, NavBar } from "./components";
import { CountrieProvider } from "./providers/CountrieProvider";
import { ThemeColorProvider } from "./providers/ThemeColorProvider";
import "./App.css";

function App() {
  return (
    <ThemeColorProvider>
      <div className="dark-mode">
        <NavBar />
        <div className="main-container">
          <CountrieProvider>
            <Filter />
            <Countries />
          </CountrieProvider>
        </div>
      </div>
    </ThemeColorProvider>
  );
}

export default App;
