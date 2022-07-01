import logo from "./logo.svg";
import "./App.css";
import "./w3css.css";
import TodoMain from "./comps/TodoMain";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TodoMain />
    </div>
  );
}

export default App;
