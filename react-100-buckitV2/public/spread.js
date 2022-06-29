const json_array = [];

for (let i = 0; i < 10; i++) {
  const min = 10;
  const max = 100;
  const rnd = Math.floor(Math.random() * (max - min) + min);
  json_array.push(rnd);
}
console.log("==============");
console.log(json_array);

/*
JS 에서 기존의 배열을 새로운 배열로 복제를 하는 경우가 자주있다
*/
const new_array1 = json_array.slice();
const new_array2 = Array.from(json_array);
const new_array3 = [];
for (let i = 0; i < json_array.length; i++) {
  new_array3[i] = json_array[i];
}
console.log(new_array3);

const new_array4 = json_array.concat();
console.log(new_array4);

const new_array5 = json_array.map((item) => {
  return item;
});

// spread(확장, 펼치기)
const new_array6 = [...json_array];
const new_array7 = [...json_array, 3, 4, 5, 6, 7, 8];
console.log(new_array7);

const book = {
  title: "자바만세",
  author: "홍길동",
  comp: "영진출판사",
  price: 25000,
};
// book JSON 객체에 원래는 없던 lang 라는 속성에 값을
// 저장하는 코드를 만나면 lang 속성을 추가하면서 book JSON 객체가
// 변경되어 버린다
// 객체의 속성이 추가, 변경되는 것은 어떤 문제를 일으킬수 있는
// 준비가 되었다 라고 봐도 된다
book.lang = "korea";

console.log(book);

/*
JS 에서 JSON, 배열 데이터를 다룰때 
값을 변경하거나 할때 기존 JSON, 배열을 변경하지 말고
변경 내용으로 새로운 JSON, 배열을 생성하여 데이터를 복제하고
생성한 JSON, 배열의 내용을 변경하여 사용하도록 권장한다
*/

// 기존의 book JSON 객체를 spread 하여 book1 에 복제하기
const book1 = { ...book };
const book2 = {
  title: book.title,
  author: book.author,
  comp: book.comp,
  price: book.price,
};

const book3 = book;

console.log("book", book);
console.log("book3", book3);

book.title = "오라클";
console.log("book", book);
console.log("book3", book3);

// 원래의 book JSON 을 펼처서 복제하면서
// title 만 MySQL 변경하여 새로운 JSON 객체 생성하기
const book4 = { ...book, title: "MySQL" };
console.log("book", book);
console.log("book4", book4);

// book JSON 을 복제하면서
// discount 라는 속성을 값 10000 으로 세팅하여 추가하고
// 새로운 book5 JSON 을 생성하기
const book5 = { ...book, discount: 10000 };
console.log("book", book);
console.log("book5", book5);

const { title, author, price, comp } = book;
/*
const title = book.title;
const author = book.author;
const price = book.price;
const comp = book.comp;
*/

const books = ["자바", "오라클", "MySQL"];
const [자바, 오라클, MySQL] = books;
/*
const 자바 = books[0]
const 오라클 = books[1]
const MySQL = books[2]
*/
