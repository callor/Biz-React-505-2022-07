import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./comps/Nav";
import Home from "./comps/Home";
import About from "./comps/About";
import Join from "./comps/Join";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
