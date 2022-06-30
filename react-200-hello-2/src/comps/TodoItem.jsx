const TodoItem = ({ todo, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{todo.content}</td>
    </tr>
  );
};

export default TodoItem;
