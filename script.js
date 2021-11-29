let lang = confirm("Ваш язык русский?") ? "ru" : "en";
console.log(lang);

let dowArray = {
  ru: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
  en: ["mn", "tu", "wd", "th", "fr", "st", "sun"],
};
dowArray[lang].forEach((element) => {
  console.log(element);
});

if (lang == "ru") {
  console.log("понедельник");
  console.log("вторник");
  console.log("среда");
  console.log("четверг");
  console.log("пятница");
  console.log("суббота");
  console.log("воскресенье");
} else {
  console.log("monday");
  console.log("tuesday");
  console.log("wednesday");
  console.log("thursday");
  console.log("friday");
  console.log("saturday");
  console.log("sunday");
}

switch (lang) {
  case "en":
    console.log("monday");
    console.log("tuesday");
    console.log("wednesday");
    console.log("thursday");
    console.log("friday");
    console.log("saturday");
    console.log("sunday");
  case "ru":
    console.log("понедельник");
    console.log("вторник");
    console.log("среда");
    console.log("четверг");
    console.log("пятница");
    console.log("суббота");
    console.log("воскресенье");
}

let namePerson = prompt("What is your name?");
console.log(
  namePerson == "Артем"
    ? "Директор"
    : namePerson == "Александр"
    ? "профессор"
    : "студент"
);
