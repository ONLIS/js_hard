let num = 266219;
let i = 0;
let rslt = 1;
let final_result = 1;
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
    final_result *= rslt;
  } else {
    final_result = 0;
    break;
  }
}
console.log(final_result);
