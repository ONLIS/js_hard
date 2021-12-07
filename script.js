"use strict";

const digits = document.querySelector(".digits");
const words = document.querySelector(".words");
const daysArray = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];
const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];
const hoursWords = ["час", "часа", "часов"];
const minutesWords = ["минута", "минуты", "минут"];
const secWords = ["секунда", "секунды", "секунд"];

function getValue(value) {
  value %= 100;
  if (value >= 5 && value <= 20) {
    return 2;
  }
  value %= 10;
  if (value === 1) {
    return 0;
  }
  if (value >= 2 && value <= 4) {
    return 1;
  }
  return 2;
}

function fncDateTime() {
  const today = new Date();
  const dayOfWeek = today.getDay() == 0 ? 7 : today.getDay();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();

  let seconds = today.getSeconds();
  let minutes = today.getMinutes();
  let hours = today.getHours();

  words.textContent =
    "Сегодня " +
    daysArray[dayOfWeek - 1] +
    ", " +
    day +
    " " +
    months[month] +
    " " +
    year +
    " года, " +
    hours +
    " " +
    hoursWords[getValue(hours)] +
    " " +
    minutes +
    " " +
    minutesWords[getValue(minutes)] +
    " " +
    seconds +
    " " +
    secWords[getValue(seconds)];

  day = (day < 10 ? "0" : "") + day;

  month++;
  month = (month < 10 ? "0" : "") + month;

  seconds = (seconds < 10 ? "0" : "") + seconds;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  hours = (hours < 10 ? "0" : "") + hours;

  digits.textContent =
    day +
    "." +
    month +
    "." +
    year +
    " - " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
}
setInterval(function () {
  fncDateTime();
}, 1000);
