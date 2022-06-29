import React from "react";

/*
부모 컴포넌트에서 전달해준 변수는
props 에 받아 {props.변수명} 형식으로 사용할수 있다

props 를 통해서 전달받은 변수는 read only 이다

*/
const View = (props) => {
  const { title } = props;
  return (
    <div>
      전달받은 값 : {props.title}, {title}
    </div>
  );
};

export default View;
