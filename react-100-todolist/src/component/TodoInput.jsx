import "../css/TodoInput.css";
import { useTodoContext } from "../context/TodoContextProvider";
const TodoInput = () => {
  const { todo, setTodo, addTodoList } = useTodoContext();

  const onChangeEvent = (e) => {
    const value = e.target.value;
    setTodo({ ...todo, text: value });
  };

  const onClickEvent = () => {
    if (todo.text) {
      addTodoList(todo.text);
    }
  };

  return (
    <div className="form">
      <input onChange={onChangeEvent} placeholder="TODO" value={todo.text} />
      <div onClick={onClickEvent} className="button">
        추가
      </div>
    </div>
  );
};

export default TodoInput;
