let num = 266219;
let i = 0;
let rslt = 1;
let first_step = 1;
while (rslt !== 0) {
  i++;
  rslt = Math.floor(num / 10 ** i);
}
i--;
for (; i >= 0; i--) {
  rslt = num;
  num = num - Math.floor(num / 10 ** i) * 10 ** i;
  rslt = Math.floor((rslt - num) / 10 ** i);
  if (rslt > 0) {
    first_step *= rslt;
  } else {
    first_step = 0;
    break;
  }
}
console.log(first_step); //произведение (умножение) цифр числа 266219

let second_step;
second_step = first_step ** 3;
console.log(second_step); //результат возведен в степень 3

let third_step;
i = 0;
while (rslt !== 0) {
  i++;
  rslt = Math.floor(second_step / 10 ** i);
}
i--;
let steps = i - 2;
for (; i > steps; i--) {
  third_step = Math.floor(second_step / 10 ** i);
  second_step = second_step - third_step * 10 ** i;
  console.log(third_step); // вывод в консоль первых двух цифр
}
