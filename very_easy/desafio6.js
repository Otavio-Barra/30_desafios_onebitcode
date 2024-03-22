function inverteArray(string) {
  const stringEdit = string.toLowerCase().split(" ");
  let result = "";
  for (let i = 0; i < stringEdit.length; i++) {
    result += stringEdit[i].split("").reverse().join("") + " ";
  }
  return result;
}

const string = "Lorem ipsum dolore sec avanti";
const string2 = "This is an apple";
console.log(inverteArray(string));
console.log(inverteArray(string2));
