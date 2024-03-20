function quadrado(num) {
  if (num) {
    const arrayNum = num.toString().split("");
    const elevadoQuadrado = arrayNum.map((item) => item * item);

    return elevadoQuadrado.join("");
  }
  return "";
}

console.log(quadrado("24"));
//output 416
console.log(quadrado(3514));
//output 925116

console.log(quadrado(94571));
//output 811625491

console.log(quadrado(24));
//output 416
