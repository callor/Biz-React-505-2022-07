import { useContext, createContext, useState, useEffect } from "react";
const ScoreContext = createContext();

const useScoreContext = () => {
  return useContext(ScoreContext);
};

const ScoreContextProvider = ({ children }) => {
  const [studentList, setStudentList] = useState([]);
  const [scoreList, setScoreList] = useState([]);

  const fetchStudent = async () => {
    const response = await fetch("http://localhost:8080/score/api/student");
    const result = await response.json();
    setStudentList(result);
  };

  // 화면이 rendering 될때 최초로 자동 실행되는 코드
  useEffect(() => {
    fetchStudent();
  }, []);

  // StudentItem 에서 전달한 st_num 값을 받아서
  // 서버에 삭제를 요청하기
  const deleteStudent = async (st_num) => {
    const response = await fetch(
      `http://localhost:8080/score/student/${st_num}/delete`
    );
    // 서버에서 결과를 String 으로 return 하고 있으므로
    // response.json() 이 아닌 reponse.text() 를 사용한다.
    const result = await response.text();

    if (result === "OK") {
      alert("학생정보가 삭제되었습니다");
      fetchStudent();
    } else {
      alert("학생정보 삭제에 문제가 있습니다");
    }
  };

  const props = {
    studentList,
    setStudentList,
    scoreList,
    setScoreList,
    deleteStudent,
  };

  return (
    <ScoreContext.Provider value={props}>{children}</ScoreContext.Provider>
  );
};

export { ScoreContextProvider, useScoreContext };
