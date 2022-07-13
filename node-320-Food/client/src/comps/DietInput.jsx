// state 변수를 만들기 위하여 useState 함수 import
import { useState } from "react";
import uuid from "react-uuid";
import moment from "moment";

const DietInput = ({ params }) => {
  // params 로 전달받은 데이터와 함수중에서 필요한 부분만 분해하여
  // 변수에 받기
  const { fetchFood, setFoods } = params;

  // JSON type 의 food state 변수 생성
  const [food, setFood] = useState({
    d_id: uuid(),
    d_date: moment().format("YYYY[-]MM[-]DD"),
    d_food: "",
    d_qty: "",
    d_cal: "",
  });
  console.log(food.d_date);

  const onChange = (e) => {
    /*
    input box 에서 내용입력(onChange) 이벤트가 발생하면
    input box 가 e.target 에 담겨 전달된다
    input box 의 name 속성과 value 을 분해하여
    각각 변수에 담기
    name 변수와 value 변수가 분해되고 각각의 별도 변수로 생성된다
    각각 별도 변수로 선언된 속성을 사용하여 
    food JSON  객체에 값을 담는다
    */
    const { name, value } = e.target;
    console.log(value);
    setFood({ ...food, [name]: value });
  };

  // JS ES5 이전 버전에서는 각각의 input box 에
  // change event 를 별도로 생성하고
  // d_date : e.target.value 와 같은 코드들 작성해야 한다
  // 현재 JS 버전에서는 하나의 event 핸들러를 통하여
  // 사용할 수 있다.
  // { [name] : 값 }
  // const onDateChange = (e) => {
  //   setFood({ ...food, d_date: e.target.value });
  // };
  // const onFoodChange = (e) => {
  //   setFood({ ...food, d_food: e.target.value });
  // };

  const onClick = async (e) => {
    console.log(food);
    const postOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    };
    /*
    react 와 node 사이에서 데이터를 주고받는데
    서로 다른 PORT 통해서 데이터를 주고 받게 되어
    CORS(Cross Origin Resouce Share, 교차사이트 스크립트 오류)가
    발생을 한다.
    서버와 서버간의 통신(데이터 교환)이 이루어질때
    보안, 해캥 방지 등을 이유로 점점 많은곳에서 스크립트 교환이
    이루어지지 않도록 하고 있다
    CORS 때문에 실제 필요한 API 이용에 제한 많다
    React, NodeJS 가 같은 서버에서 작동될때는 Package.json 에
    proxy 설정을 통하여 CORS 문제를 일부 해결 할 수 있다.

    proxy 설정을 했을 경우는 fetch URL 부분에 http://localhost:3000 주소를
    생략하고 router 주소만 사용하여 nodejs 와 데이터를 주고 받는다
    */
    const res = await fetch("/food/insert", postOption);
    if (res.ok) {
      const json = await res.json();
      console.log(json);
      fetchFood().then((result) => {
        setFoods(result);
      });
    }

    setFood({
      d_id: uuid(),
      d_date: moment().format("YYYY[-]MM[-]DD"),
      d_food: "",
      d_qty: "",
      d_cal: "",
    });
  };

  return (
    <div className="w3-row-padding">
      <div className="w3-col s2 m2 l2">
        <input
          type="date"
          name="d_date"
          className="w3-input"
          value={food.d_date}
          onChange={onChange}
        />
      </div>
      <div className="w3-col s2">
        <input
          type="text"
          name="d_food"
          className="w3-input"
          placeholder="메뉴를 입력하세요"
          value={food.d_food}
          onChange={onChange}
        />
      </div>
      <div className="w3-col s2">
        <input
          type="text"
          name="d_qty"
          className="w3-input"
          placeholder="섭취수량을 입력하세요"
          value={food.d_qty}
          onChange={onChange}
        />
      </div>
      <div className="w3-col s2">
        <input
          type="text"
          name="d_cal"
          className="w3-input"
          placeholder="단위 칼로리를 입력하세요"
          value={food.d_cal}
          onChange={onChange}
        />
      </div>
      <div className="w3-col s2">
        <button className="w3-button w3-blue" onClick={onClick}>
          저장하기
        </button>
      </div>
    </div>
  );
};
export default DietInput;
