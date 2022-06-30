import "./App.css";
import Main from "./comps/Main";
/*
React에서 JS 파일, JSX(JavaScript Extands)
*/
// JSX 에서 사용하는 Component type 변수
const h1 = <h1>대한민국만세</h1>;
const div = <div>{h1}</div>;
const header = <header className="App-header"></header>;
const appDiv = (
  <div className="App">
    {header}
    {div}
    <Main />
  </div>
);
// App 이라는 이름의 Component type 의 함수 선언
function App() {
  return appDiv;
}

// 다른 Component에서 App Component 를 import 하여 조립할수 있도록
// 내보내는 것
export default App;
