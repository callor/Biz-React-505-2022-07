import logo from "./logo.svg";
import "./App.css";
import "./w3css.css";
import ScoreMain from "./comps/ScoreMain";
import { ScoreContextProvider } from "./context/ScoreContextProvider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="w3-container">
        <ScoreContextProvider>
          <ScoreMain />
        </ScoreContextProvider>
      </div>
    </div>
  );
}

export default App;
