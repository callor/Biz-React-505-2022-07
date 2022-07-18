// Main 컴포넌트에 선언된 state 변수와 setState 함수를
// props 로 받기
const Input = ({ aName, setAName }) => {
  // aName 이라는 이름으로 문자열 state 변수 선언하기
  // state 변수를 선언하면 실제 데이터를 저장할 변수와
  // 데이터를 저장하는데 사용할 함수가 생성된다
  // state 변수에는 값을 절대 직접 저장하지 않는다
  // aName = "홍길동" : 이런 코드 절대 사용금지
  // setAName("이몽룡") : state 변수에 값을 변경하는 방법, 값 할당 방법
  // state 변수는 단순히 값을 저장하는 용도가 아니라
  // 화면에 데이터를 표현하는 용도의 변수다
  // const [aName, setAName] = useState("");

  /*
    Input 컴포넌트에서 입력한 문자열을
    Main 컴포넌트의 h3 컴포넌트에 보여서 즉시 확인을 하고 싶다
    aName state 는 Input 컴포넌트에 선언되어 있고
    h3 컴포넌트는 Main 컴포넌트에 있어서 서로 관계를 지을 수 없다
    그래서 Input 컴포넌트에 있는 aName state 를 Main 컴포넌트로
    끌어올리기를 하겠다
  */

  // 키보드를 사용하여 text 를 입력하면 입력한 text가
  // e.target.value 에 담겨서 onChnageEvent 함수에 전달된다
  // 전달된 text 를 setAName 함수를 사용하여 aName state 변수에 담는다
  const onChangeEvent = (e) => {
    const value = e.target.value;
    setAName(value);
  };

  // input box 의 value 속성에 state 변수를 설정하면
  // input box 는 즉시 read only 상태가 된다.
  // state 변수를 직접 핸들링 할수 없도록 하는 조치이다
  // input box 의 onChange event 를 설정하여 키보드로 입력된 문자열을
  // state 변수에 setting 하여야 한다.
  return (
    <input
      name="a_name"
      onChange={onChangeEvent}
      value={aName}
      placeholder="이름을 입력하세요 "
    />
  );
};

export default Input;
