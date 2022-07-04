/*
    fetch 함수를 사용하여 data.go.kr 의 API 연결하기

*/
const apiURL = "/get/1360000/WthrWrnInfoService/getWthrWrnList";
const apiServiceKey =
  "HqsAExzgHQFhUjy7hdAth6LJ2WMaLc43V0PVrqTbgFNprnLpaeiJLjd07d4O%2BOMzFPhfP6JJqL%2FV%2BCYWKHxjtw%3D%3D";

const fetchData = async () => {
  const serviceURL = `${apiURL}?serviceKey=${apiServiceKey}&dataType=JSON&pageNo=1&numOfRows=100`;
  console.log(serviceURL);
  const response = await fetch(serviceURL);
  const json = await response.json();
  return json;
};

export { fetchData };
