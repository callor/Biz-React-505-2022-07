import backgroundImage from "./images/image.jpg";
import "./App.css";
import "./w3css.css";
import BucketMain from "./components/BucketMain";

// css style 을 JS 코드로 구현하기
const backgroudStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "scroll",
  backgroundSize: "100% 100%",
};

function App() {
  return (
    <div className="App">
      <header className="App-header" style={backgroudStyle}></header>
      <section className="w3-container w3-margin">
        <BucketMain />
      </section>
    </div>
  );
}

export default App;
