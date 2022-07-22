const StudentItem = ({ student }) => {
  return (
    <tr>
      <td>{student.st_num}</td>
      <td>{student.st_name}</td>
      <td>{student.st_tel}</td>
      <td>{student.st_addr}</td>
      <td>&times;</td>
    </tr>
  );
};

export default StudentItem;
