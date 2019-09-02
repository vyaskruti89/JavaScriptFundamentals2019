const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-arrays'));
const {
  myName,
  setTeachersNames,
  Add,
  ageMeByAYear,
  makeMeYoungerByAYear,
  isEvenOrOdd,
  convertStringToInt,
  returnCharacterPositionFromString,
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
} = require('../../exercises/01-intro-variable/01-intro-variables-numbers');

describe('Intro Variables And Numbers', () => {
  it('should return the students name', () => {
    const name = myName('Jamal');
    expect(name).equal('Jamal');
  });

  it('should return  both names of the teachers that are teaching the class', () => {
    const teachersName = setTeachersNames('Jamal Taylor Matina Patsos');
    expect(teachersName).equal('Jamal Taylor Matina Patsos');
  });

  it('correctly adds both arguments and returns the sum', () => {
    const sum = Add(5, 5);
    expect(sum).to.equal(10);
  });

  it('should use the Javascript increment operator to increment the year by a 1', () => {
    expect(ageMeByAYear.toString().includes('++')).equal(true);
    expect(ageMeByAYear(2019)).equal(2020);
  });

  it('should use the Javascript decrement operator to decement the age by a 1', () => {
    expect(makeMeYoungerByAYear.toString().includes('--')).equal(true);
    expect(ageMeByAYear(18)).equal(17);
  });

  it('should return true if the number is an even number or false if the number is an odd number', () => {
    expect(isEvenOrOdd(2)).equal(true);
    expect(isEvenOrOdd(3)).equal(false);
  });

  it('should cast the string to an integer', () => {
    expect(convertStringToInt('5')).equal(5);
  });

  it('should return the index position of the word', () => {
    expect(returnCharacterPositionFromString('James', 'a')).equal(1);
  });

  it('should return the length of the string', () => {
    expect(stringLength('Javascript').equal(9));
  });

  it('should return the last letter of the string', () => {
    expect(getLastCharacter('Marvel')).equal('l');
  });

  it('should return the second word of a two word place', () => {
    expect(getLastWordInPlaceName('Los Angeles')).equal('Angeles');
  });

  it('should return the largest number by comparing both arguments given to the function', () => {
    expect(getLargerNumber(5, 10)).equal(10);
  });

  it('should compare the Equality of both arguments and return equal if both arguments are equal and if both arguments are not equal return not equal', () => {
    expect(compareEquality(5, '5').equal('Not Equal'));
  });

  it('should replace the last name of the full name with the new last name', () => {
    expect(replaceLastName('Gordon Ramsey', 'Smith')).equal('Gordon Smith');
  });

  it('should capitalize the last name', () => {
    expect(capitalizeLastName('Jane doe')).equal('Jane Doe');
  });

  it('should use  strict inequality operator and return the correct responses', () => {
    expect(testStrictNotEqual(17)).equal('Equal');
    expect(testStrictNotEqual('17')).equal('Not Equal');
    expect(testStrictNotEqual.toString().includes('!==')).equal(true);
  });

  it('should use the logical And operator and return the correct responses', () => {
    expect(testLogicalAnd(24)).equal('No');
    expect(testLogicalAnd(50)).equal('Yes');
    expect(testLogicalAnd(50)).equal('No');
    expect(testLogicalAnd.toString().includes('&&')).equal(true);
  });

  it('should use the logical Or operator and return the correct responses', () => {
    expect(testLogicalOr(0)).equal('No');
    expect(testLogicalOr(20)).equal('Yes');
  });
});
