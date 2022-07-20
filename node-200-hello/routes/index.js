// express 도구의 Router() 함수를 호출하여
// router 객체를 생성한다
import express from "express";
const router = express.Router();

// JSON(JavaScript Object Notation)
// JavaScript 에서 처음 구현된 데이터 기술이다
// 데이터를 선언할때 key : value pair 방식으로 구현한다.

// 대부분의 Web Service 에서 데이터를 주고받을때 공통으로 사용하는 기술
const json = {
  name: "",
  tel: "",
  address: "",
};

// name 속성만을 가진 JSON 객체가 4개 담긴 배열
const jsonArray = [
  { name: "홍기동" },
  { name: "임꺽정" },
  { name: "이몽룡" },
  { name: "성춘향" },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  const friend = [
    {
      name: "홍길동",
      tel: "010-111-111",
      address: "서울특별시",
    },
    {
      name: "이몽룡",
      tel: "010-222-2222",
      address: "남원시",
    },
  ];
  res.json(friend);
});

const student = {
  st_num: "001",
  st_name: "홍길동",
  st_dept: "컴공과",
  st_grade: 3,
};

// http://localhost:3000/home 으로 요청이 들어 오면
router.get("/home", (req, res) => {
  // views/home.* 파일을 열어서 rendering 하여 전달하라
  res.render("home", student);
});

router.get("/student", (req, res) => {
  res.render("student", { student }); // { student: student });
});

router.get("/text", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
  res.write("<h1>반갑습니다</h1>");
  res.write("<h1>우리나라만세</h1>");
  res.end("<h1>Republic of Korea<h1>");
});

// 다른 JS 모듈(파일) import 하여 모듈을 사용할수 있도록 하는 것
export default router;
