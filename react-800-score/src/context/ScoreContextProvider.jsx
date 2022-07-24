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
  // StudentInput 에서 input 에 text 를 입력하면
  // 입력된 text 저장할 state 변수
  const [student, setStudent] = useState({
    st_num: "",
    st_name: "",
    st_dept: "",
    st_tel: "",
    st_addr: "",
  });

  // API 서버에서 학생 리스트를 가져와서 저장할 state 배열
  const [studentList, setStudentList] = useState([]);
  const [stdIsUpdate, setStdUpdate] = useState(false);

  const fetchStudent = async () => {
    const response = await fetch("/api/student");
    const stdList = await response.json();
    setStudentList(stdList);
  };

  const deleteStudent = async (st_num) => {
    const response = await fetch(
      `http://localhost:8080/score/api/student/${st_num}/delete`
    );
    const result = await response.text();

    // 서버에서 삭제가 되었다는 메시지(OK)를 받으면
    // 다시 서버에 데이터를 요청하여 화면을 다시 그린다
    if (result === "OK") {
      alert("삭제가 되었습니다");
      fetchStudent();
    } else {
      alert("삭제하는데 문제가 발생하였습니다");
    }
  };

  const stNumCheck = async (st_num) => {
    const response = await fetch(`/api/student/${st_num}/check`);
    const result = await response.text();
    if (result === "OK") {
      alert("사용가능한 학번입니다");
    } else {
      alert("이미 등록된 학번입니다");
    }
  };

  const insertStudent = async () => {
    let url = "/api/student/insert";
    if (stdIsUpdate) {
      url = "/api/student/update";
    }
    const fetchData = {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(student),
    };
    const response = await fetch(url, fetchData);
    const result = await response.text();
    if (result === "OK") {
      alert("데이터가 정상적으로 추가되었습니다");
      fetchStudent();
    } else {
      alert("데이터 추가에 실패 했습니다");
    }
  };

  const getStudent = async (st_num) => {
    const response = await fetch(`/api/student/${st_num}`);
    const stJson = await response.json();
    setStudent(stJson);
    setStdUpdate(true);
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  // store 에 state 변수와 함수를 보관하기 위하여 보관용 창고 생성
  const props = {
    studentList,
    setStudentList,
    student,
    setStudent,
    deleteStudent,
    stNumCheck,
    insertStudent,
    getStudent,
  };

  return (
    <ScoreContext.Provider value={props}>{children}</ScoreContext.Provider>
  );
};

export { ScoreContextProvider, useScoreContext };
