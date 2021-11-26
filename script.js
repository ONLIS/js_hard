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
console.log(first_step);
