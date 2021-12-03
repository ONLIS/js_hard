"use strict";

const htmlElm = document.querySelector(".day-of-week");
const today = new Date();
const dayOfWeek = today.getDay() == 0 ? 7 : today.getDay();
let daysArray = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

daysArray.forEach(function (currentValue, index) {
  let strng = "";
  let styles = "day-of-week__item";
  if (index == dayOfWeek - 1) {
    styles += " day-of-week__item--bold";
  }
  if (index == 5 || index == 6) {
    styles += " day-of-week__item--italic";
  }
  strng += "<div class='" + styles + "'>" + currentValue + "</div>";
  htmlElm.innerHTML += strng;
});
