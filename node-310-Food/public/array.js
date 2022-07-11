// 객체 펼치기
// 객체의 비 구조화
// 객체의 분해
// 객체를 분해하여 KK 변수를 생성하고
// KK 변수에 '우리나라'문자열을 담아라
const nation = { KK: "우리나라", K1: "Korea" };
const { KK, K1 } = nation;
// const KK = nation.KK
// const K1 = nation.K1
console.log(KK);

// 배열 펼치기
// 배열의 비 구조화
// 배열의 분해
// [1,2,3] 가 담긴 배열을 각각 분해하여
// 변수, a, b,c 를 생성하고 각각 요소를 변수에 담아라
const arr = [1, 2, 3];
const [a, b, c] = arr;
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]
console.log(a, b, c);
