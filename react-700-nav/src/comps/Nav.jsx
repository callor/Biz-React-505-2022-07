/*
html 에는 보통 메뉴에 JS 코드를 쓰거나 
또는 a tag 를 사용해서 구성한다

react-router-dom 에서 제공하는 Link 컴포넌트를 사용한다
Link 컴포넌트는 결국 a tag 로 변환이 되지만,
html 의 a tag 는 다소 성질이 다르다
*/
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/join">Contect US</Link>
      </li>
      <li>
        <input />
      </li>
    </ul>
  );
};

export default Nav;
