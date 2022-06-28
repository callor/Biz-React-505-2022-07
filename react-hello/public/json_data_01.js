const student = {
  st_num: 1,
  st_name: "홍길동",
  st_grade: 3,
  st_dept: "컴공과",
};

console.table(student);

console.log(student.st_name);
console.log(student.st_num);

// js 에서 JSON 객체 데이터는 자체를 const(read only)로 선언을 하여도
// 각 속성(요소 데이터)는 변경할수 있다
student.st_name = "이몽룡";

console.log(student);

/*
JSON 객체 분해, 펼치기, Spread 
student 객체에 저장된 값 중에서 st_name, st_dept 속성에
저장된 값만 추출하고, st_name, st_dept 단일변수를 선언하여
저장해 달라
*/
const { st_name, st_dept } = student;
console.log(st_name, st_dept);
