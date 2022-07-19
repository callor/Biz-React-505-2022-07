import { useAppContext } from "../context/AppContext";

const Input = () => {
  // state 변수와 함수를 props 로 전달받지 않고
  // Context API 를 통하여 store 로 부터 받기
  const { text, setText, bucketList, setBucketList } = useAppContext();

  // 키보드로 text 를 입력할때 실행되는 event
  const onChangeEvent = (e) => {
    setText(e.target.value);
  };

  // 키보드로 text 등을 입력할때 실행되는 event
  // Enter, ESC 등을 처리하고자 할때 사용하는 event
  const onKeyDownEvent = (e) => {
    if (e.keyCode === 13) {
      setBucketList([...bucketList, text]);
    }
  };

  return (
    <>
      <input
        onKeyDown={onKeyDownEvent}
        onChange={onChangeEvent}
        placeholder="할일을 입력하세요"
        value={text}
      />
    </>
  );
};
export default Input;
