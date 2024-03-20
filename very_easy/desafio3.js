const array = [0, 9, 6, 8, 9, 1, 5, 7];
const array2 = ["oh", "hi", "mark"];

function inversor(arr) {
  const arrInverso = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrInverso.push(arr[i]);
  }
  return arrInverso;
}
console.log(inversor(array));
// output: [7, 5, 1, 9, 8, 6, 9, 0]

console.log(inversor(array2));
//output: [ 'mark', 'hi', 'oh' ]
