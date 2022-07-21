import { useScoreContext } from "../context/ScoreContextProvider";
import StudentItem from "./StudentItem";
const StudentList = () => {
  const { studentList } = useScoreContext();

  const StudentBody = studentList.map((student) => {
    // react 에서 map, forEach 등을 사용하여 List 를 생성하는 경우
    // 반드시 key 변수를 UNIQUE 값으로 세팅해 주어야 한다
    // studentList 에는 학번 항목이 PK 로 설정되어 있으므로
    // key 값에 st_num 항목을 부착주어야 한다
    return <StudentItem student={student} key={student.st_num} />;
  });

  return (
    <table className="w3-table w3-table-all w3-hoverable">
      <thead>
        <tr>
          <th>학번</th>
          <th>이름</th>
          <th>학과</th>
          <th>주소</th>
          <th>비고</th>
        </tr>
      </thead>
      <tbody>{StudentBody}</tbody>
    </table>
  );
};

export default StudentList;
