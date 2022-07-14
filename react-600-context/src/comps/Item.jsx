const Item = ({ addr }) => {
  return (
    <tr>
      <td>{addr.a_name}</td>
      <td>{addr.a_tel}</td>
      <td>{addr.a_address}</td>
    </tr>
  );
};

export default Item;
