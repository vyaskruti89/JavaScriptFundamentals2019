/**
 * Add three programming languages and return the languages array
 * @return {array}
 */

function createAnArray() {
  let array = [];
  /*** Add three items to the array ****/
  return array;
}

/**
 *  Return BMW by accessing a property from the array of cars
 *
 *  @return {string} BMW
 */

function accessingAnArray() {
  var cars = ['BMW', 'Honda', 'Civic'];
}

/***
 * create two functions that are stored inside an array.
 *  1) first function will add two arguments i.e arr[0](10,10) = 20
 *  2) second function will subtract two arguments i.e arr[1](10,10) = 0
 *
 *
 */

function addFunctionsIntoArray() {}

/**
 * Loop through the array using a for loop and return the highest number
 * @param  { array }
 * @returns { number } the highest number that was in the array
 * @example
 * highestNumber([1, 2, 3]) // [3]
 * highestNumber([5, 1, 2, 3, 10]) // [10]
 *
 **/
function highestNumber(array) {}

/**
 * Combine an array by using the spread operator
 * @param  {array} array1
 * @param  {array} array2
 * @returns {array} an array that combines array1 and array2
 * @example
 * combineArray(['Japan','China','India'], ['USA','UK']) // ['Japan','China','India','USA','UK']
 **/

function combineArray(array1, array2) {}

/**
 * 1) This function will loop through an array of objects using the traditional for loop and will
 *      return an object that matches the id
 *
 *  2) Once the object is found you must break out of the loop for optimization purposes
 *
 *  @param  {array} arr
 *  @param  {number} id
 *   @example
 *    findAndAbort(i.e [{id:10,firstName:'John',lastName:'Smith'},{id:20,firstName:'Cookie',lastName:'Monster'},{id:30,firstName:'Jane',lastName:'Doe'}],20);
 *   //{id:20,firstName:'Cookie',lastName:'Monster'}
 *   //Please note, the loop never iterates over the last item, because we found our object. There is no need to continue looping.
 *
 *  // To Pass this challenge a break must be used.
 *
 *  @returns {object} that is found in the array
 *
 *
 */

function findAndAbort(arr, id) {}

/**
 * A palindrom is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, nurses or run.
 * Checks to see if a string is a palindrome.
 * Use the split and join methods to solve this problem
 * @param  {[string]}  string
 * @return {Boolean}
 *
 */

function isPalindrome(str) {}

/***
 *
 * @return {array}
 */

function removeDuplicates() {
  // Use Sets to remove duplicate elements from the array
  let numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

  /** Return the an array of unique values */
  return;
}

/**
 * Access testObj and return the value for hat inside clothes (which should be ball cap)
 * @return {string} type of hat
 */
function accessObject() {
  let clothes = {
    hat: 'ballcap',
    shirt: 'jersey',
    shoes: 'cleats'
  };
  // Only change code below this line

  let hatValue = clothes; // Change only this line of code

  return hatValue;
}

/**
 *   Update the object to contain your first and last name.
 *   Add at least three skills inside the array
 *   @return {object} student
 */

function createStudentObject() {
  var student = {
    firstname: '',
    lastname: '',
    skills: []
  };
  // Only change code below this line.

  return student;
}

/**
 * Make an object that represents a dog called myDog which contains the keys
 * "name", "legs", "tails" and "owners". Each should have a value.
 * "Owners" should be an array with a list of owners names.
 * @return {object}
 */

function createDogObject() {}

/**
 * Combines two objects into one
 * @param  {object} obj1
 * @param  {object} obj2
 * @return {object} obj1 and obj2 combined
 */

/**
 *  Using Object.keys return all the properties contained in the object.
 *  The properties are name, legs, tails and friends.
 *
 *  @return {array}
 */

function returnObjectProperties() {
  let dog = {
    tail: 1,
    legs: 4,
    friends: ['Rusty', 'Sparky'],
    name: 'Rocket'
  };
  //Add code here
  //hint you need to return an array
}

function combineObject(obj1, obj2) {}

/**
 * @param {Number} = id
 * @param {String} = string
 * @param {String} = value
 *
 *  @examples
 *  updateRecords(5439, "artist", "ABBA"), artist should be "ABBA"
 *  updateRecords(5439, "tracks", "Take a Chance on Me") tracks should have "Take a Chance on Me"as the last element.
 *  After updateRecords(2548, "artist", ""), artist should not be set
 *  After updateRecords(1245, "tracks", "Addicted to Love"), tracks should have "Addicted to Love"as the last element
 *  After updateRecords(2468, "tracks", "Free"), tracks should have "1999"as the first element.
 *  After updateRecords(2548, "tracks", ""), tracksshould not be set
 *  After updateRecords(1245, "album", "Riptide"), albumshould be "Riptide"
 *
 *
 */

function updateRecords(id, prop, value) {
  /**** Don't need to modify this at all */
  let collection = {
    '2548': {
      album: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    '2468': {
      album: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    '1245': {
      artist: 'Robert Palmer',
      tracks: []
    },
    '5439': {
      album: 'ABBA Gold'
    }
  };
}

module.exports = {
  createAnArray,
  accessingAnArray,
  highestNumber,
  isPalindrome,
  createDogObject,
  createStudentObject,
  returnObjectProperties,
  combineArray,
  accessObject,
  combineObject,
  removeDuplicates,
  updateRecords,
  findAndAbort,
  addFunctionsIntoArray
};
