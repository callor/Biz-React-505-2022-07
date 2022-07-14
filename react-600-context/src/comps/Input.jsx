// Main 으로 부터 전달받은 변수를 받기 위해 porps 를 선언
const Input = (props) => {
  // props 로 부터 address state 변수를 분해하기
  const { address, setAddress, addrList, setAddrList } = props;
  // address state 변수로 부터 각각 속성 요소를 분해하기
  const { a_name, a_tel, a_address } = address;

  /*
    input box 의 value 속성에 변수를 할당하면
    input box 는 read only 상태가 된다
    만약 화면의 input box 에 키보드로 문자열을 입력하면
    value 속에 연결된 변수(state, 일반)의 값을 직접 변경하는
    성질이 발생한다
    react 에서는 state 변수를 임의로 변경하는것이 금지 되어 있다
    이러한 특성을 유지하기 위하여 value={변수} 형태로 할당이 되면
    쓰기금지(read only) 성질이 발생한다

    이럴때 defaultValue 를 사용하여 변수를 할당 할수도 있지만
    간혹 defaultValue 로 설정된 변수값은 state 의 특성을
    제대로 발휘 하지 못한다 그래서 defaultValue 보다는 value 속성을 사용

    input box 에 문자열을 키보드로 입력하면
    input box 의 onChange event를 사용하여 setState() 함수를 통하여
    state 변수에 값을 변경하도록 하는 코드를 작성해야 한다

    input box 에 입력된 문자열을 onChange 이벤트가 가로채고
    가로챈 문자열을 setState 함수를 통하여 state 변수를 변경하고
    state 의 rendering 특성에 따라 input box 에 문자열이
    나타나는 코드가 된다

  */
  const onChangeEvent = (e) => {
    // e.target.name 과 e.target.value 속성을
    // 각각 name, value 변수로 추출하기
    const { name, value } = e.target;
    /* JS 에서는 변수에 담긴 문자열을 
     직접 변수명으로 생성하는 방법이 있다
     const name = "a_tel" 이라는 변수가 있을때
     [name] 형식으로 사용하면 마치 a_tel 이라는 변수가 만들어 진것처럼
     사용할 수 있다
     event 핸들러의 e.target.name 값을 이용하여
     각 input 가 공통으로 사용할수 있는 코드 작성이 가능하다
    */
    //   [name] = value;
    // 다음의 코드는 각각 input 의 event 에 따라서
    setAddress({ ...address, [name]: value });
    // setAddress({...address,  a_name: value });
    // setAddress({...address,  a_tel: value });
    // setAddress({...address,  a_address : value });
    // 의 코드가 자동으로 생성된다

    // setAddress({...address,  [name]: value });
    // 이 코드는 기존의 address 에 담긴 데이터를 복사하면서
    // { [name] : value } 코드의 name 변수에 해당하는 값만 변경한다

    // react 에서는 state변수 = 값 과 같은 코드는 절대 금지이므로
    // 반드시 setState 함수를 사용하여 값을 변경해야 한다
    // 때문에 Main 의 setAddress 함수를 props 로 전달받아 사용해야 한다
  };

  /*
  저장버튼을 클릭하면
  address 에 저장된 데이터를 addrList 추가하기
  addrList 도 Main 에서만든 state 배열이다
  때문에 addrList 에 데이터를 추가하려면 Main 에서 함수를 생성하여
  props 로 전달하고 여기의 onClickEvent 에서
  호출하여 addrList 에 추가한다

  Main setAddrList 함수를 props 로 전달받고
  setAddrList 함수를 사용하여 addrList에 추가하는 코드를 작성한다

  */
  const onClickEvent = (e) => {
    // addrList 배열을 복제하고
    // address state 변수를 추가하여 새로은 addrList 를 setting
    setAddrList([...addrList, address]);
  };

  return (
    <>
      <input
        onChange={onChangeEvent}
        name="a_name"
        placeholder="이름"
        value={a_name}
      />
      <input
        onChange={onChangeEvent}
        name="a_tel"
        placeholder="전화번호"
        value={address.a_tel}
      />
      <input
        name="a_address"
        onChange={onChangeEvent}
        placeholder="주소"
        value={props.address.a_address}
      />
      <button onClick={onClickEvent}>저장</button>
    </>
  );
};

export default Input;
