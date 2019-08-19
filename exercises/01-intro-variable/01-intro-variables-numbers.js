//set myName variable to your name;
function myName() {
  var myName;

  return myName;
}

const teachers = null;
function editTeachers() {
  'use strict';
  // change code below this line so that we can set the variable.

  // teachers  = 'Jamal Taylor & Matina Patsos'; <- this is invalid

  // change code above this line to
  return teachers;
}

/*** Create a variable that holds the sum of both arguments and return the sum ***/
function Add(a, b) {}

/*** Using ++ operator add a year to the argument and make me older */
function ageMeByAYear(age) {
  return age;
}

/*** Using --operator make me younger  ***/
function makeMeYoungerByAYear(age) {
  return age;
}

/** Using the modulus operator determine if the argument is an even or odd number */

function isEvenOrOdd(number) {
  var isEven;

  return isEven;
}

/** Take the argument that will be a string and return an integer  */
function convertStringToInt(str) {
  var int;
  return int;
}

/** Take the argument and return the position of the third letter **/
function returnCharacterPositionFromString(str) {
  var characterPosition;

  return characterPosition;
}

/** Take the argument and use the method string method length to return the length of the argument */

function stringLength(str) {
  var strLength;

  return strLength;
}

/*** Get the last character of the argument */
function getLastCharacter(str) {
  var lastCharacter;

  return lastCharacter;
}

/*** Using the String method indexOf return the index of the argument */
function getTheCharacterPosition(str) {
  return str;
}

/** Using  the string method substring and any other string related methods return the last part of a city name
 *
 *   i.e New York
 *   returns New York
 *
 *    i.e New Mexico
 *    returns Mexico
 */

function getLastPartOfACity(city) {
  var lastPartOfCityName;

  return lastPartOfCityName;
}

/***
 *  Using Conditonal logic compare both arguments and return the largest argument
 *
 */

function isGreaterThan(arg1, arg2) {
  var largestNumber;

  return largestNumber;
}
/***
 * Change the operator to use the strict equality operator so that
 *   "10" !== 10
 *
 */
function compareEquality(a, b) {
  if (a == b) {
    // Change this line
    return 'Equal';
  }
  return 'Not Equal';
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
  getLastPartOfACity,
  isGreaterThan,
  compareEquality
};
