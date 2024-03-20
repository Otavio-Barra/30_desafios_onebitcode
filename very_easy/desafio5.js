function maiorLetra(string) {
  const lowerCase = string.toLowerCase();
  const arry = lowerCase.split("").sort();
  return arry[arry.length - 1];
}

console.log(maiorLetra("lorem ipsum dolore sec avanti"));
// output: v

console.log(maiorLetra("Hello"));
//  output: o

console.log(maiorLetra("May the force be with you"));
// output: y
