// const request = require("supertest")("http://localhost:4001/findCarValue"); // only changed the URL to my API endpoint

// const chai = require("chai");
// const assert = require("chai").assert;
// const expect = require("chai").expect;
// const actual = require("chai").actual;

// const mocha = require("mocha");

//---------Function Imports----------//
const findCarValue = require("./api"); // Importing the findCarValue function from server.js for testing

describe("findCarValue API", () => {
  //--1st Test (Sunny Day Scenario)--//
  it("First test of POST /findCarValue", () => {
    // Arrange
    const model = "civic";
    const year = 2014;
    const expected = 6614;

    // Act
    const actual = findCarValue(model, year);
    // console.log(`Actual from first test: ${actual}`);
    // Assert
    expect(actual).toEqual(expected);
  });

  //--2nd Test (Invalid model: wrong data type)--//
  it("Second test of POST /findCarValue", () => {
    // Arrange
    const model = 2014;
    const year = 2014;
    const expected = { error: "Invalid model: wrong data type" };

    // Act
    const actual = findCarValue(model, year);

    // Assert
    expect(actual).toEqual(expected);
  });

  //--3rd Test (Invalid year: wrong data type)--//
  it("Third test of POST /findCarValue", () => {
    // Arrange
    const model = "Mirage";
    const year = "nineteen-ninety-two";
    const expected = { error: "Invalid year: wrong data type" };

    // Act
    const actual = findCarValue(model, year);

    // Assert
    expect(actual).toEqual(expected);
  });

  //--4th Test (Invalid model: empty model not allowed)--//
  it("Fourth test of POST /findCarValue", () => {
    // Arrange
    const model = " ";
    const year = 2014;
    const expected = { error: "Invalid model: empty model not allowed" };

    // Act
    const actual = findCarValue(model, year);

    // Assert
    expect(actual).toEqual(expected);
  });

  //--5th Test (Invalid yea: outside of scope)--//
  it("Fifth test of POST /findCarValue", () => {
    // Arrange
    const model = "Atenza";
    const year = 1885;
    const expected = { error: "Invalid year: outside of scope" };

    // Act
    const actual = findCarValue(model, year);

    // Assert
    expect(actual).toEqual(expected);
  });

  //--6th Test (Invalid year: outside of scope)--//
  it("Sixth test of POST /findCarValue", () => {
    // Arrange
    const model = "Camry";
    const year = 2026;
    const expected = { error: "Invalid year: outside of scope" };

    // Act
    const actual = findCarValue(model, year);

    // Assert
    expect(actual).toEqual(expected);
  });

  //--7th Test (Invalid year: negative number not allowed)--//
  it("Seventh test of POST /findCarValue", () => {
    // Arrange
    const model = "Skyline";
    const year = -2012;
    const expected = { error: "Invalid year: negative number not allowed" };

    // Act
    const actual = findCarValue(model, year);

    // Assert
    expect(actual).toEqual(expected);
  });

  //--8th Test (Invalid model: no special chars allowed)--//
  it("Eighth test of POST /findCarValue", () => {
    // Arrange
    const model = "Axel@";
    const year = 2005;
    const expected = { error: "Invalid model: special characters not allowed" };

    // Act
    const actual = findCarValue(model, year);

    // Assert
    expect(actual).toEqual(expected);
  });

  // ---------9th Test (Testing the API?)----------//
  // it("Ninth test of POST /findCarValue", () => {
  //   // Arrange
  //   const model = request.post("/findCarValue").send(req.body.model);
  //   const year = request.post("/findCarValue").send(req.body.year);
  //   const expected = 8708;

  //   // Act
  //   const actual = findCarValue(model, year);

  //   // Assert
  //   expect(actual).toEqual(expected);
  // });
});
