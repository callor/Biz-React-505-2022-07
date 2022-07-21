import { useScoreContext } from "../context/ScoreContextProvider";
import { useState } from "react";

const StudentItem = ({ student }) => {
  const [isEdit, setEdit] = useState(false);
  const { deleteStudent } = useScoreContext();

  const onDeleteEvent = (st_num) => {
    if (window.confirm(`${st_num} 학생 정보를 삭제할까요`)) {
      deleteStudent(st_num);
    }
  };

  const onEditEvent = () => {
    setEdit(!isEdit);
  };

  const editBox = (
    <tr>
      <td>
        <input defaultValue={student.st_num} />
      </td>
      <td>
        <input defaultValue={student.st_name} />
      </td>
      <td>
        <input defaultValue={student.st_dept} />
      </td>
      <td>
        <input defaultValue={student.st_addr} />
      </td>
      <td>
        <button>저장</button>
      </td>
    </tr>
  );

  const viewBox = (
    <tr onClick={onEditEvent}>
      <td>{student.st_num}</td>
      <td>{student.st_name}</td>
      <td>{student.st_dept}</td>
      <td>{student.st_addr}</td>
      <td onClick={(e) => onDeleteEvent(student.st_num)}>&times;</td>
    </tr>
  );
  if (isEdit) {
    return editBox;
  } else {
    return viewBox;
  }
};

export default StudentItem;
