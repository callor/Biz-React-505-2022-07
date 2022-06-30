const TodoInput = (props) => {
  const { insert_todo } = props;

  /*
    input box 에 키보드로 문자열을 입력하는 중에 Enter 를 누르면
    데이터를 TodoMain 의 insert_todo 에게 보내서
    todoList 에 추가해 달라 라고 요청을 할 것이다

  */
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // insert_todo 호출하며 입력된 todo 를 전송한다
      const todo = e.target.value;
      insert_todo(todo);
    }
  };

  return (
    <>
      {/* 
        input box onKeyDown 핸들러 등록   
        키보드 입력을 감시하기
        */}
      <input
        placeholder="TODO INPUT"
        className="w3-input w3-border w3-hover-light-gray"
        onKeyDown={onKeyDown}
      />
    </>
  );
};
export default TodoInput;
