import { useScoreContext } from "../context/ScoreContextProvider";

const StudentItem = ({ student }) => {
  const { deleteStudent, getStudent } = useScoreContext();

  const onDeleteEvent = (st_num) => {
    if (window.confirm(`${st_num} 학번 데이터 삭제??`)) {
      deleteStudent(st_num);
    }
  };

  const onClickEvent = (e) => {
    if (e.target.className === "delete") return false;
    const tr = e.target.closest("TR");
    const st_num = tr.dataset.stnum;
    getStudent(st_num);
  };

  return (
    <tr data-stnum={student.st_num} onClick={onClickEvent}>
      <td>{student.st_num}</td>
      <td>{student.st_name}</td>
      <td>{student.st_dept}</td>
      <td>{student.st_tel}</td>
      <td>{student.st_addr}</td>
      <td className="delete" onClick={() => onDeleteEvent(student.st_num)}>
        &times;
      </td>
    </tr>
  );
};

export default StudentItem;
