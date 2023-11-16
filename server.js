"use strict";

const express = require("express");
const app = express();

//----------MIDDLEWARE----------//
app.use(express.json()); //allows us to see data in json format in the body of the request

//----------Static Variables for example: Honda Civic, 2014----------//
const hondaCar = {
  model: "Civic",
  year: 2014,
};

//To manage scope for the "year" data input. If someone puts in a year higher than the current year, it will bring an error message saying 'outside of scope'
const currentYear = new Date().getFullYear();
console.log(`Current Year: ${currentYear}`);

//----------Finding the Car Value Function----------//
function findCarValue(model, year) {
  if (
    typeof model === "string" &&
    model.match(/^[a-zA-Z]{1,20}$/) && // allowing 20 characters long, but only letters (as per business rules)
    typeof year === "number" &&
    year >= 1950 && // First car was made in 1886, but I made it so Turners don't insure cars made earlier than 1950 without an in-person consultation. Earlier models not applicable for online quotes.
    year <= currentYear
  ) {
    //The above contains many conditions because without so many - for example, the year scope - the function will return any year number and the other if/else statements below will be rendered useless.
    return (
      model
        .toLowerCase() // if someone puts in CIVIC, rather than civic, then this changes all chars to lowercase
        .split("") // splits all the string characters into an array for the map method
        .map((letter) => letter.charCodeAt(0) - 96) //the actual alphabet values are 96 less than the charCode
        .reduce((acc, cur) => acc + cur) * // adds all the characters' values together
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
} // Could possibly use a switch statement instead?

//Testing with static variable 'hondaCar' to view in console to make sure the function works
console.log(
  `Logging result of function with static example: ${findCarValue(
    hondaCar.model,
    hondaCar.year
  )}`
);

//-----------EXPORTS----------//
module.exports = findCarValue;

//----------ENDPOINTS----------//
app.post("/findCarValue", (req, res) => {
  console.log(findCarValue(req.body.model, req.body.year));
  // findCarValue(req.body.model, req.body.year);
  res.send(req.body);
});
// !! When using Postman, remember to change the body to raw and JSON format, rather than text. Hours spent on Text wondering why it wasn't working. Also remember to give the keys quotation marks.

//----------PORT----------//
const PORT = 4001;

//----------LISTEN----------//
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🐣`);
});
