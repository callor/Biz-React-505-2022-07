import logo from "./logo.svg";
import "./App.css";
import Main from "./comps/Main";
import { AppContextProvider as AppContext } from "./context/ContextProvider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="로고" />
      </header>
      <AppContext>
        <Main />
      </AppContext>
    </div>
  );
}

export default App;
