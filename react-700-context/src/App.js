import "./App.css";
import Main from "./comps/Main";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Main />
      </AppContextProvider>
    </div>
  );
}

export default App;
