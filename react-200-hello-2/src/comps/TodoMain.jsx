import { useState } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoMain = () => {
  const [todoList, setTodoList] = useState([]);

  const insert_todo = () => {
    // 여기는 TodoInput 이 전달해준 todo 를 todoList 에 추가하는 곳
  };

  return (
    <div className="w3-container w3-margin">
      {/* TodoInput 야 insert_todo 함수를 넣에게 보낸다  */}
      <TodoInput insert_todo={insert_todo} />
      <TodoList />
    </div>
  );
};
export default TodoMain;
