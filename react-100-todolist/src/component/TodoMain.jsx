import "../css/TodoMain.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
const TodoMain = () => {
  return (
    <main className="todo-main">
      <div className="title">오늘 할일</div>
      <div className="form-wrapper">
        <TodoInput />
      </div>
      <div className="todos-wrapper">
        <TodoList />
      </div>
    </main>
  );
};

export default TodoMain;
