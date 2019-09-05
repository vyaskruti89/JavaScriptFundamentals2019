//set myName variable to your name;
function myName(name) {
  let myName = name;

  return myName;
}

const teachers = null;
function setTeachersNames(teachersName) {
  // change code below this line so that we can set the variable.
  teachers = teachersName; //  <- this is  invalid because teachers is a const. How can we fix this?

  return teachers;
}

/*** return the sum of both arguments  ***/
function add(a, b) {
  let sum;

  return sum;
}

/*** Using the increment operator, add a year to the argument and make me older */
function ageMeByAYear(age) {
  return age;
}

/*** Using the decrement operator make me age decrement by a year  ***/
function makeMeYoungerByAYear(age) {
  return age;
}

/** Take the argument that will be a string and return an integer  */
function convertStringToInt(str) {
  let int;
  return int;
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

/** Take the argument and return the length of the argument */

function stringLength(str) {
  let strLength;

  return strLength;
}

/***  return the last character of the argument
 *  ie Washington
 *  should return n
 *
 *
 */

function getLastCharacter(str) {
  let lastCharacter;

  return lastCharacter;
}

/** Return the last part of a place name
 *
 *   i.e New York
 *   returns York
 *
 *    i.e New Mexico
 *    returns Mexico
 *
 *    i.e San Diego
 *    returns Diego
 */

function getLastWordInPlaceName(place) {
  let newPlace;

  return newPlace;
}

/***
 *  Using Conditonal logic compare both arguments and return the largest argument
 *
 */

function getLargerNumber(arg1, arg2) {
  let largestNumber;

  return largestNumber;
}

/*** A person just got married and they need their last name replaced.
 * The function accepts two arguments first agrument being the fullname of the newlywed.
 * The second argument is the new last name the newlywed will receive after being marred.
 *
 *   ie fullname =  Emily Rose
 *    newLastName = Smith
 *    returned value === Emily Smith
 *
 *
 *
 */

function replaceLastName(fullName, newLastName) {
  let newFullName;
  return newFullName;
}

/***
 *  Capitalize the first letter in a last name
 *  i.e John smith -> John Smith
 */

function capitalizeLastName(fullName) {
  let capitalizeLastName;

  return capitalizeLastName;
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

/**
 * Refactor the code down below to use the logical || operator
 * testLogicalOr(0) should return No
 * testLogicalOr(20) should return Yes
 *
 */

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

/** Using the modulus operator determine if the argument is an even or odd number */

function isEvenOrOdd(isEven) {
  return isEven;
}

module.exports = {
  myName,
  setTeachersNames,
  add,
  ageMeByAYear,
  makeMeYoungerByAYear,
  isEvenOrOdd,
  convertStringToInt,
  getTheCharacterPosition,
  stringLength,
  getLastCharacter,
  getLastWordInPlaceName,
  getLargerNumber,
  compareEquality,
  replaceLastName,
  capitalizeLastName,
  testStrictNotEqual,
  testLogicalAnd,
  testLogicalOr
};
