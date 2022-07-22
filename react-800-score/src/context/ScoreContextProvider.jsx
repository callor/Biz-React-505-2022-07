import { useContext, createContext, useState, useEffect } from "react";

// ScoreContext 라는 Store 생성
const ScoreContext = createContext();

// store 에서 state 변수와 함수를 가져가기 쉽도록
// 도와줄 함수를 선언하기
const useScoreContext = () => {
  return useContext(ScoreContext);
};

// state 변수와 함수를 공유하기 위한 Store
const ScoreContextProvider = ({ children }) => {
  // API 서버에서 학생 리스트를 가져와서 저장할 state 배열
  const [studentList, setStudentList] = useState([]);

  const fetchStudent = async () => {
    const response = await fetch("/api/student");
    const stdList = await response.json();
    setStudentList(stdList);
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  // store 에 state 변수와 함수를 보관하기 위하여 보관용 창고 생성
  const props = {
    studentList,
    setStudentList,
  };

  return (
    <ScoreContext.Provider value={props}>{children}</ScoreContext.Provider>
  );
};

export { ScoreContextProvider, useScoreContext };
