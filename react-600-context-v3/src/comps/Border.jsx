// Border 함수객체
// props.children 이라는 props 의 기본 속성이
// 함수의 매개변수에 기본적으로 포함되어 있다
// props.children 속성을 사용하여
// <Border>객체들</Border> 형식으로 사용하면
// 처음부터 존재하는 객체들 처럼 새로운 합성된 객체가 생성된다
// Border 라는 객체를 재 사용하는 것
const Border = ({ children }) => {
  return <>{children}</>;
};

// Layout 함수객체
const Layout = () => {
  return (
    <>
      <Border>
        <h1>반갑습니다</h1>
        <p>합성을 이용한 Layout 구성</p>
      </Border>
      <Border>
        <h1>여기는 Main Section 입니다</h1>
      </Border>
    </>
  );
};
export default Layout;
