let inputString1 = " Произвольная строка.   ";
let inputString2 = 123;
let inputString3 =
  "  Произвольная строка, которая создана для проверки количества символов в данной строке.   ";

let testFunction = function (inputValue) {
  let outputString;
  if (typeof inputValue !== "string") {
    alert("Входная переменная не строка.");
    return "error";
  } else {
    inputValue = inputValue.trim();
    if (inputValue.length > 30) {
      outputString = inputValue.slice(0, 30) + "...";
    } else {
      outputString = inputValue;
    }
    return outputString;
  }
};

console.log(testFunction(inputString1));
console.log(testFunction(inputString2));
console.log(testFunction(inputString3));
