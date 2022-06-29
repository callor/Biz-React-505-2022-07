const data = {
  b_title: "우리나라",
  b_comment: "Republic of Korea",
};

// data 객체가 담긴 배열 dataList 생성
const dataList = [data];

// dataList 배열에 담긴 값을 dataList2 로 그대로 복제하면서
// 새로운 data 요소를 추가하는 코드
// react 에서 state 변수가 배열일 경우
// setter 함수내부에서 다음과 같은 코드가 사용되어야 한다
const dataList2 = [...dataList, data];
console.log(dataList2);
