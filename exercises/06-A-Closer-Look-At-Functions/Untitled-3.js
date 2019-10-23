/**  
const showFirstAndLAst = arr => {
    const newArr = arr.map((word,index,array) => {
        const isEven = index % 2 ===0;
        if (isEven) returns word[0]+ word[word.length -1]};
        else {return 'odd';
    });

    console.log(arr)
}
*/

var array = [1, 3, 5];


const newArray = array.map(x => x * 2);

console.log(newArray);




/** 
const nouns = ["dog", "shoe", "cat", "hat"];
 

const map = (arr, callback) => {
    var newArray = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(newArray, i)
        const resultOfCallback = callback(arr[i], i, arr);
        console.log(resultOfCallback);
        newArray.push(resultOfCallback)
        console.log(newArray)
      }
      return newArray;
};

console.log(map(nouns, (noun, index, originalArray) => {
    console.log(index);
    console.log(originalArray);
    return noun + 's';

})); // ["dogs", "shoes", "cats"]

console.log(map(nouns, (noun, index, originalArray) => {
    console.log(index);
    console.log(originalArray);
    return noun[0].toUpperCase() + noun.substring(1);

})); // ["Dog", "Shoe", "Cat"]
*/
/** 
const oddns = [1,2,3,4,5,6];
const oddnumbers = numbers.filter((number) => {
    return number % 2 === 0;
});
console.log(oddnumbers);
*/

/**
 * const cheapfruit = shoppingcart.filter(shoppingitem)=> {
 * if(shoppingitem.cost <= 30){
 * return shoppingitem}}
 */