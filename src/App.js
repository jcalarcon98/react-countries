import { NavBar } from "./components";
import { CountrieProvider } from "./providers/CountrieProvider";
import { ThemeColorProvider } from "./providers/ThemeColorProvider";
import "./App.css";
import AppRouter from "./routers/AppRouter";

function App() {

  return (
      <ThemeColorProvider>
        <NavBar />
        <div className="main-container">
          <CountrieProvider>
            <AppRouter />
          </CountrieProvider>
        </div>
      </ThemeColorProvider>
  );
}

export default App;
