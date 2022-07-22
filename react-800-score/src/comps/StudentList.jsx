import { useScoreContext } from "../context/ScoreContextProvider";
import StudentItem from "./StudentItem";

const StudentList = () => {
  const { studentList } = useScoreContext();
  const StudentBody = studentList.map((student) => {
    return <StudentItem student={student} />;
  });

  return (
    <table className="w3-table w3-table-all w3-hoverable">
      <tr>
        <thead>
          <th>학번</th>
          <th>이름</th>
          <th>전화번호</th>
          <th>주소</th>
          <th>비고</th>
        </thead>
        <tbody>{StudentBody}</tbody>
      </tr>
    </table>
  );
};

export default StudentList;
