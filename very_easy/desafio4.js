function quadrado(num) {
  if (num) {
    const arrayNum = num.toString().split("");
    const elevadoQuadrado = arrayNum.map((item) => item * item);

    return elevadoQuadrado.join("");
  }
  return "";
}

console.log(quadrado("24"));
console.log(quadrado(3514));
console.log(quadrado(94571));
console.log(quadrado(24));
