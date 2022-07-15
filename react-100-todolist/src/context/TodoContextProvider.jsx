import uuid from "react-uuid";
import { createContext, useContext, useState, useEffect } from "react";
const TodoContext = createContext();

const useTodoContext = () => {
  const context = useContext(TodoContext);
  return context;
};

const TodoContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(() => {
    const loadList = JSON.parse(localStorage.getItem("TODOLIST"));
    if (loadList && loadList.length > 0) {
      return loadList;
    } else {
      return [];
    }
  });

  const [todo, setTodo] = useState({
    id: uuid(),
    text: "",
    isComp: false,
  });

  // useEffect 를 사용하여 localStoreage 에 저장
  useEffect(() => {
    if (todoList && todoList.length > 0) {
      localStorage.setItem("TODOLIST", JSON.stringify(todoList));
    }
  }, [todoList]);

  const addTodoList = () => {
    setTodoList([...todoList, todo]);
    setTodo({ ...todo, id: uuid(), text: "" });
    console.log(todo);
  };

  const compToggle = (id) => {
    const todoCompList = todoList.map((todo) => {
      if (todo.id === id) return { ...todo, isComp: !todo.isComp };
      else return todo;
    });
    setTodoList(todoCompList);
  };

  const removeTodo = (id) => {
    const todoRemoveList = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(todoRemoveList);
  };

  const props = {
    todo,
    setTodo,
    todoList,
    addTodoList,
    compToggle,
    removeTodo,
  };

  return <TodoContext.Provider value={props}>{children}</TodoContext.Provider>;
};

export { useTodoContext, TodoContextProvider };
