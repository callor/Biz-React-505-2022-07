import "../css/TodoItem.css";
import { useTodoContext } from "../context/TodoContextProvider";
const TodoItem = ({ todo }) => {
  const { compToggle, removeTodo } = useTodoContext();
  return (
    <div className="todo-item">
      <div
        onClick={() => {
          removeTodo(todo.id);
        }}
        className="todo-remove"
      >
        &times;
      </div>
      <div
        onClick={() => {
          compToggle(todo.id);
        }}
        className={`todo-text ${todo.isComp && "complet"}`}
      >
        {todo.text}
      </div>
      {todo.isComp && <div>&#x2713;</div>}
    </div>
  );
};

export default TodoItem;
