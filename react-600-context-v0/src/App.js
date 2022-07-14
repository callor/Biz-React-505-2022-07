import logo from "./logo.svg";
import "./App.css";
import Main from "./comps/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="로고" />
      </header>
      <Main />
    </div>
  );
}

export default App;
