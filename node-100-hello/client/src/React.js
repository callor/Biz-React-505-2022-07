import logo from "./logo.svg";
import "./React.css";
import "./w3css.css";
import BucketInput from "./comps/BucketInput";

function React() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BucketInput />
    </div>
  );
}

export default React;
