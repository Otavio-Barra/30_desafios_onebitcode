function mediaAlunos(array) {
  const some =
    array.reduce((acc, currentValue) => acc + currentValue, 0) / array.length;

  return some;
}

const array = [10, 9, 6, 8, 9, 1, 5, 7];

console.log(mediaAlunos(array));
