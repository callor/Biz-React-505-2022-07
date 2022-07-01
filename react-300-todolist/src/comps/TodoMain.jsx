import { useState } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoMain = () => {
  const [todoList, setTodoList] = useState([]);

  const insert_todo = (content) => {
    // 여기는 TodoInput 이 전달해준 todo 를 todoList 에 추가하는 곳
    const todo = {
      t_id: "",
      t_s_date: "",
      content: content,
      t_e_date: "",
    };

    // todoList 배열을 모두 복사하고
    // 끝에 todo를 추가하여
    // todoBody 배열을 생성하라
    const todoBody = [...todoList, todo];
    setTodoList(todoBody);
  };

  return (
    <div className="w3-container w3-margin">
      {/* TodoList 야 todoList 데이터를 todoList 변수에 담아 보낸다  */}
      <TodoList todoList={todoList} />
      {/* TodoInput 야 insert_todo 함수를 넣에게 보낸다  */}
      <TodoInput insert_todo={insert_todo} />
    </div>
  );
};
export default TodoMain;
