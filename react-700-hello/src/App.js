import logo from "./logo.svg";
import "./App.css";
import Main from "./comps/Main";
import Nation from "./comps/Nation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Main />
      <Nation />
    </div>
  );
}

export default App;
