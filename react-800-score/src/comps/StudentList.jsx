import { useScoreContext } from "../context/ScoreContextProvider";
import StudentItem from "./StudentItem";

const StudentList = () => {
  const { studentList } = useScoreContext();
  /*
  each(map, forEach)를 사용하여 반복문으로 Component List 를 만들때
  반드시 요소에 key 변수에 값을 세팅해줘야 한다
  같은 유형의 리스트가 다수 화면에 그려진 후에 일부의 Lis 요소가 변경될때
  react 그 변경된 요소를 추적할 수 있는 UNIQUE 한 Key 이 필요로 한다
  보통 DB 로 부터 Select 한 데이터에는 PK 요소가 포함되어 있다
  이 PK 요소를 key={PK} 형식으로 지정하여 주어야 한다.
  */
  const StudentBody = studentList.map((student) => {
    return <StudentItem student={student} key={student.st_num} />;
  });

  return (
    <table className="w3-table w3-table-all w3-hoverable">
      <thead>
        <tr>
          <th>학번</th>
          <th>이름</th>
          <th>학과</th>
          <th>전화번호</th>
          <th>주소</th>
          <th>비고</th>
        </tr>
      </thead>
      <tbody>{StudentBody}</tbody>
    </table>
  );
};

export default StudentList;
