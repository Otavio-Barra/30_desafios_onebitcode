function recursive(num) {
  if (num == 0) return "";
  return num === 1 ? "chuck" : "chuck-" + recursive(num - 1);
}

console.log(recursive(10));
//output: chuck-chuck-chuck-chuck-chuck-chuck-chuck-chuck-chuck-chuck
