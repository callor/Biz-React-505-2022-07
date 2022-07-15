import { useTodoContext } from "../context/TodoContextProvider";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoList } = useTodoContext();
  const todoListBody = todoList.map((todo) => {
    return <TodoItem todo={todo} key={todo.id} />;
  });

  return <>{todoListBody}</>;
};

export default TodoList;
