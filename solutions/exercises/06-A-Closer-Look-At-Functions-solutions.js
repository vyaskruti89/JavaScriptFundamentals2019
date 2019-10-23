/***
 *  a test
 *  Create a function that  returns an object.
 *  The object will be a simple object with just the key being name and the value being the students name
 *   objectMaker() // {'name':'matina'}
 *
 *
 */

function objectMaker() {
  return { name: "matina" };
}

/**
 *  As a programmer, I would like to be able to call on a function that returns an object that will allow me to
 *  interact with an array.
 *  The object will contain three methods that will allow the developer to interact with the array.
 *
 *
 *  1) The first method on the object will accept an argument of type string.
 *     The method will add an element to the grocery list array.
 *
 *     const groceryListObj =  groceryList() groceryListObj.add('apples');  groceryListObj.add('bananas')  groceryListObj.add('steak');
 *
 *  bonus question
 *  2) The second method on the object will accept an argument. The argument will be type `number`.
 *     Using the argument will remove the element from the array.
 *     const groceryListObj =  groceryList();
 *     groceryListObj.remove(2); // ['apples','steak']
 *
 *  3) The third method will return list.
 *     const groceryListObj =  groceryList();
 *      groceryListObj.getList() //['apples','steak'];
 *
 *   Important name the methods add,remove, and getList otherwise the tests will not work properly.
 *
 *
 */
function groceryList() {
  let groceryItems = [];

  return {
    add: newItem => groceryItems.push(newItem),
    remove: index => groceryItems.splice(index, 1),
    getList: () => [...groceryItems]
  };
}

/**
 *  slides
 * https://slides.com/accjavascript/deck-2-11#/3
 *
 * Use CLOSURES to complete this exercise.
 * For those of you who are familar with object-orientened programming,
 * this exercise will use a similar pattern with "setters" and "getters".
 * @returns {Object} an object that has two methods. See comments below.
 */
const calculator = () => {
  let sum = 0;
  return {
    add: number => {
      sum = sum + number;
    },
    get: () => sum
  };
};

/**
 * Write a function called guessingGame which takes in one parameter amount.
 * The function should return another function that takes in a parameter called guess.
 * In the outer function, you should create a variable called answer which is
 * the result of a random integer between 0 and 10 as well as a variable called guesses which should be set to 0.
 *
 * In the inner function, if the guess passed in is the same as the random integer (defined in the outer function),
 * you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.
 *
 * You will have to make use of closure to solve this problem.
 *
 * @example (yours might not be like this, since the answer is random every time):
 *
 * let guessRound1 = guessingGame(5); // Allowing only 5 guesses
 * guessRound1(1); // "You're too low!"
 * guessRound1(8); // "You're too high!"
 * guessRound1(5); // "You're too low!"
 * guessRound1(7); // "You got it!"
 *
 * let guessRound2 = guessingGame(3); // Allowing only 3 guesses
 * guessRound2(5); // "You're too low!"
 * guessRound2(3); // "You're too low!"
 * guessRound2(1); // "No more guesses. The answer was 0"
 */

const guessingGame = numberOfRounds => {
  // @see https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  const answer = Math.floor(Math.random() * (10 + 1));
  let count = 0;

  return guess => {
    count += 1;
    if (count >= numberOfRounds)
      return "No more guesses. The answer was " + answer;
    else if (guess < answer) return "You're too low!";
    else if (guess > answer) return "You're too high!";
    else if (guess === answer) return "You got it!";
  };
};

/**
 * Write a function called "multiplier" which accepts two parameters.
 * If the function is passed both parameters, it should return the product of the two.
 * If the function is only passed one parameter, it should return a function which can later be passed another
 * parameter to return the product.
 * You will have to use closures and arguments to solve this.
 *  slide
 *  https://slides.com/accjavascript/deck-2-11#/17
 *
 * @example
 * multiplier(3,4); // 12
 * multiplier(3)(4); // 12
 * multiplier(3); // function(){}....
 *
 * @param {number} a
 * @param {number} b
 */
const multiplier = (a, b) => {
  if (typeof b === "number") return a * b;
  return b => a * b;
};

/**
 * Given a student name, formats and prints out the value in a visually appealing way
 * (e.g. with hyphens or astericks before each value) with `console.log`
 * slide
 * https://slides.com/accjavascript/deck-2-11#/19
 * @example
 *  - Jamal
 *  - Matina
 *  - Eddy
 * @param {string} name instuctor name
 */
const printer = name => {
  console.log(`- ${name}\n`);
};

/**
 * Loops through the array of strings
 * and for each name, calls upon the function printer to print out the name
 * @param {array}
 * @param {function} callback printer function
 */
const printNames = (array, callback) => {
  for (let item of array) {
    callback(item);
  }
};

/**
 * Build the forEach function yourself
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * @param {array} arr
 * @param {function} callback
 */
const forEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

/**
 * Given an array of strings, remove all letters of each value except the first and last character in the strings
 * @param {array} arr
 * @returns {array} new array, where each values is the first and character of each string
 * @example
 *   showFirstAndLast(['colt','matt', 'tim', 'udemy']); // ["ct", "mt", "tm", "uy"]
 *   showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
 */
const showFirstAndLast = arr => {
  let newArray = [];
  for (let item of arr) {
    const first = item[0];
    const last = item[item.length - 1];
    newArray.push(`${first}${last}`);
  }
  return newArray;
};

/**
 * Recreate the map function
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * @param {array} arr
 * @param {function} callback
 * @returns {array} new array
 */
const map = (arr, callback) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let result = callback(arr[i], i, arr);
    newArray.push(result);
  }
  return newArray;
};

/**
 * Multiplies each value in an array by two
 * @param {array} arr an array of numbers e.g. [1, 3, 5]
 * @returns {array} new array, with each value doubled e.g. [2, 5, 10]
 */

// Solution 1
const doubleValues = arr => {
  return arr.map(num => {
    return num * 2;
  });
};
// Solution 2
const doubleValues = arr => arr.map(num => num * 2);

/**
 * Given an array nested with objects
 * and give the name of a shared key that is in all the nested objects,
 * extract the values from the object that have the given key
 * and returns the extracted values in an array
 * @param {array} arr array of objects
 * @param {string} key what, from the object you want to return in your new array
 * @returns {array} new array
 *
 * @example
 * const arrayOfNames = [
 *  {name: 'Ellie', age: 20},
 *  {name: 'Tim', age: 35},
 *  {name: 'Matt', age: 18},
 *  {name: 'Colt', age: 47}
 * ];
 * extractKey(arrayOfNames, 'name'); // ['Ellie', 'Tim', 'Matt', 'Colt']
 */

// Solution 1
const extractKey = (arr, key) => {
  return arr.map(row => {
    return row[key];
  });
};
// Solution 2
const extractKey = (arr, key) => arr.map(row => row[key]);
