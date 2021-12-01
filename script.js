"use strict";

const limit = 100;
let nmbArray = ["234", "33", "57", "54829", "29", "773", "4342"];
let resultArray1 = [];
let resultArray2 = [];

function function1(testArray) {
  testArray.forEach((elm) => {
    if (elm[0] == "2" || elm[0] == "4") {
      resultArray1.push(elm);
    }
  });
}
function function2(limitNumber) {
  let testNumber = 2;
  let dividerArr;
  let message;
  while (testNumber <= limitNumber) {
    dividerArr = [];
    message = "";
    for (let i = 1; i <= testNumber; i++) {
      if (testNumber % i == 0) {
        dividerArr.push(i);
      }
    }
    if (dividerArr.length == 2) {
      message =
        "Простое число: " +
        testNumber +
        ". Делители этого числа: " +
        dividerArr[0] +
        " и " +
        dividerArr[1];
      resultArray2.push(message);
    }
    testNumber++;
  }
}

function1(nmbArray);
function2(limit);

resultArray1.forEach((elm) => {
  console.log(elm);
});
resultArray2.forEach((elm) => {
  console.log(elm);
});
