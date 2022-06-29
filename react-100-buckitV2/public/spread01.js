const arrays = Array(1000 * 1000);

let start = new Date();
const new_array1 = [];
for (let i = 0; i < arrays.length; i++) {
  new_array1[i] = arrays[i];
}
console.log(new Date() - start);

start = new Date();
const new_array2 = [...arrays];
console.log(new Date() - start);

start = new Date();
const new_array3 = arrays.slice();
console.log(new Date() - start);
