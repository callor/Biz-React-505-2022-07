const TodoItem = ({ todo }) => {
  return (
    <tr>
      <td>{todo.content}</td>
    </tr>
  );
};

export default TodoItem;
