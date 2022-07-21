import logo from "./logo.svg";
import "./App.css";
import "./w3css.css";
import { ScoreContextProvider } from "./context/ScoreContextProvider";
import StudentList from "./comps/StudentList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ScoreContextProvider>
        <div className="w3-container w3-margin">
          <StudentList />
        </div>
      </ScoreContextProvider>
    </div>
  );
}

export default App;
