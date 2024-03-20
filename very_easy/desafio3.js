const array = [0, 9, 6, 8, 9, 1, 5, 7];

function inversor(arr) {
  const arrInverso = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrInverso.push(arr[i]);
  }
  return arrInverso;
}
console.log(inversor(array));
