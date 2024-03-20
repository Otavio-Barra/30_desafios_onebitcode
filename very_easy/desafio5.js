function maiorLetra(string) {
  const lowerCase = string.toLowerCase();
  const arry = lowerCase.split("").sort();
  return arry[arry.length - 1];
}

console.log(maiorLetra("lorem ipsum dolore sec avanti"));
