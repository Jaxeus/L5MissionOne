console.log("Oh, hi there world!");
/* 
const alphabetValues = [
  { a: 1 },
  { b: 2 },
  { c: 3 },
  { d: 4 },
  { e: 5 },
  { f: 6 },
  { g: 7 },
  { h: 8 },
  { i: 9 },
  { j: 10 },
  { k: 11 },
  { l: 12 },
  { m: 13 },
  { n: 14 },
  { o: 15 },
  { p: 16 },
  { q: 17 },
  { r: 18 },
  { s: 19 },
  { t: 20 },
  { u: 21 },
  { v: 22 },
  { w: 23 },
  { x: 24 },
  { y: 25 },
  { z: 26 },
];

const a = 1;
const c = 3;
const i = 9;
const v = 22;

const modelCivic = "civic";

 */

/* // function designateAlphabetValues(letter) {
// letter = letter.toUpperCase();
let letterValue = letter.charCodeAt(0);

let alphabetValue = letterValue - 96;

// console.log(this.letterValue);
// console.log("Meow");
// console.log(this.alphabetValue);

// return alphabetValue;
// }

let word = "civic";
let value = word.split("").map((letters) => {
  return letters;
});

// const bop = value.map((boops) => {
//   return boops;
// });
console.log(word, value);
// console.log(designateAlphabetValues(bop.map(boops)));

console.log(); */

const year = 2020;
const model = "civic";
const modelSplit = model.split("");
console.log(modelSplit);

const modelSplitMap = modelSplit.map((letter) => letter.charCodeAt(0) - 96);
console.log(modelSplitMap);

const modelSplitMapReduce = modelSplitMap.reduce((acc, cur) => acc + cur);
console.log(modelSplitMapReduce);

const modelSplitMapReduceFormula = modelSplitMapReduce * 100 + year;
console.log(modelSplitMapReduceFormula);

const allInOne =
  model
    .toLowerCase()
    .split("")
    .map((letter) => letter.charCodeAt(0) - 96)
    .reduce((acc, cur) => acc + cur) *
    100 +
  year;
console.log(allInOne);

function findCarValue() {
  return (
    model
      .toLowerCase()
      .split("")
      .map((letter) => letter.charCodeAt(0) - 96)
      .reduce((acc, cur) => acc + cur) *
      100 +
    year
  );
}

console.log(findCarValue());

function findCarValue(model, year) {
  if (
    typeof model === "string" &&
    model.match(/^[a-zA-Z]{1,20}$/) &&
    typeof year === "number" &&
    year >= 1950 &&
    year <= currentYear
  ) {
    return (
      model
        .toLowerCase()
        .split("")
        .map((letter) => letter.charCodeAt(0) - 96)
        .reduce((acc, cur) => acc + cur) *
        100 +
      year
    );
  } else if (typeof model !== "string" && typeof year === "number") {
    return { error: "Invalid model: wrong data type" };
  } else if (typeof model === "string" && typeof year !== "number") {
    return { error: "Invalid year: wrong data type" };
  } else if (model === " " && typeof year === "number") {
    return { error: "Invalid model: empty model not allowed" };
  } else if (typeof model === "string" && year < 1950 && year > 0) {
    return { error: "Invalid year: outside of scope" };
  } else if (typeof model === "string" && year > currentYear) {
    return { error: "Invalid year: outside of scope" };
  } else if (typeof model === "string" && year < 0) {
    return { error: "Invalid year: negative number not allowed" };
  } else if (!model.match(/^[a-zA-Z]{1,20}$/) && typeof year === "number") {
    return { error: "Invalid model: special characters not allowed" };
  }
}

//Above turned to Switch Statement:

function findCarValue(model, year) {
  switch (true) {
    case typeof model === "string" &&
      model.match(/^[a-zA-Z]{1,20}$/) &&
      typeof year === "number" &&
      year >= 1950 &&
      year <= currentYear:
      return (
        model
          .toLowerCase()
          .split("")
          .map((letter) => letter.charCodeAt(0) - 96)
          .reduce((acc, cur) => acc + cur) *
          100 +
        year
      );

    case typeof model !== "string" && typeof year === "number":
      return { error: "Invalid model: wrong data type" };

    case typeof model === "string" && typeof year !== "number":
      return { error: "Invalid year: wrong data type" };

    case model === " " && typeof year === "number":
      return { error: "Invalid model: empty model not allowed" };

    case typeof model === "string" && year < 1950 && year > 0:
      return { error: "Invalid year: outside of scope" };

    case typeof model === "string" && year > currentYear:
      return { error: "Invalid year: outside of scope" };

    case typeof model === "string" && year < 0:
      return { error: "Invalid year: negative number not allowed" };

    case !model.match(/^[a-zA-Z]{1,20}$/) && typeof year === "number":
      return { error: "Invalid model: special characters not allowed" };

    default:
      return { error: "Invalid input" };
  }
}
