//set myName variable to your name;
function myName() {
  let myName;

  return myName;
}

function editTeachers() {
  'use strict';
  // change code below this line so that we can set the variable.
  const teachers = null;

  // teachers  = 'Jamal Taylor & Matina Patsos'; // this is invalid because teachers is a const. How can we fix this?

  return teachers;
}

/*** Chnge the variable "sum" so that it will holds the sum of both arguments ***/
function Add(a, b) {
  let sum = null;

  return sum;
}

/*** Using ++ operator add a year to the argument and make me older */
function ageMeByAYear(age) {
  return age;
}

/*** Using -- operator make me younger  ***/
function makeMeYoungerByAYear(age) {
  return age;
}

/** Take an argument that is a string and return an integer  */
function convertStringToInt(str) {
  let int;
  return int;
}

/** Take an argument and return the position of the third letter **/
function returnCharacterPositionFromString(str) {
  let characterPosition;

  return characterPosition;
}

/** Take the argument and return the length of the argument */

function stringLength(str) {
  let strLength;

  return strLength;
}

/*** Get the last character of the argument */
function getLastCharacter(str) {
  let lastCharacter;

  return lastCharacter;
}

/*** Using the String method indexOf find the first position of the letter in the name  */
/***
 *
 *  ie: name = James,
 *  letter = J
 *
 *  return value should be 0
 *
 */
function getTheCharacterPosition(name, letter) {
  let characterPosition;
  return characterPosition;
}

/** Return the last part of a city name
 *
 *   i.e New York
 *   returns York
 *
 *    i.e New Mexico
 *    returns Mexico
 */

function getLastWordInPlaceName(city) {
  let place;

  return place;
}

/***
 *  Using Conditonal logic compare both arguments and return the largest argument
 *
 */

function getLargerNumber(arg1, arg2) {
  var largestNumber;

  return largestNumber;
}

/*** A person just got married and they need their last name replaced.
 * The function accepts two arguments first agrument being the fullname of the newlywed.
 * The second argument is the new last name the newlywed will receive after being marred.
 *
 *   ie fullname =  Emily rose
 *    newLastName = Smith
 *    returned value === Emily Smith
 *
 *
 *
 */

function replaceLastName(fullname, newLastName) {
  let newFullName;

  return newFullName;
}

/***
 *  Capitialize the first letter in a last name
 *  i.e John smith -> John Smith
 */

function capializeLastName(fullName) {
  let capializedLastName;

  return capializedLastName;
}

/***
 * Change below so that it will also compare data types
 *
 *
 */
function compareEquality(a, b) {
  if (a == b) {
    // Change this line
    return 'Equal';
  }
  return 'Not Equal';
}

/** The function should use the strict inequality operator
 *   3 !== 3; // false
 *   3 !== '3'; // true
 *   4 !== 3; // true
 *   testStrictNotEqual(17) should return "Equal"
 *   testStrictNotEqual("17") should return "Not Equal"
 *   testStrictNotEqual(12) should return "Not Equal"
 *   testStrictNotEqual("bob")
 *
 */

function testStrictNotEqual(val) {
  // Only Change Code Below this Line
  if (val) {
    // Only Change Code Above this Line

    return 'Not Equal';
  }
  return 'Equal';
}

/** Using the modulus operator determine if the argument is an even or odd number */

function isEvenOrOdd(number) {
  let isEven;

  return isEven;
}

/***
 *  Refactor the code down below to use the logical && operator
 *   testLogicalAnd(0) should return "No"
 *   testLogicalAnd(24) should return "No"
 *   testLogicalAnd(50) should return "Yes"
 *   testLogicalAnd(51) should return "No"
 *   testLogicalAnd(75) should return "No"
 */

function testLogicalAnd(num) {
  if (num > 5) {
    if (num < 10) {
      return 'Yes';
    }
  }
  return 'No';
}

function testLogicalOr(num) {
  // Only change code below this line

  if (num > 10) {
    return 'No';
  }
  if (num < 5) {
    return 'No';
  }
  return 'Yes';

  // Only change code above this line
}

module.exports = {
  myName,
  editTeachers,
  Add,
  ageMeByAYear,
  makeMeYoungerByAYear,
  isEvenOrOdd,
  convertStringToInt,
  returnCharacterPositionFromString,
  stringLength,
  getLastCharacter,
  getTheCharacterPosition,
  getLastWordInPlaceName,
  getLargerNumber,
  compareEquality,
  replaceLastName,
  capializeLastName,
  testStrictNotEqual,
  testLogicalAnd,
  testLogicalOr
};
