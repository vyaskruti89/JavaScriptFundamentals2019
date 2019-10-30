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
/** 
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
 
const student = [
    {
        id :2,
        name:jason,
    },{
        id :3,
        name: Mike,
    },{
        id :4,
        name:hi,
 
];
},
const myfav = party.find((charac)=>{
    if(charac.id ==2){
        return charac;
    }
    console.log(charac)
});

const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];


const tally = fruitBasket.reduce( (acc,fruit)=>{
    console.log(acc)
if (acc[fruit]){

    acc[fruit]+=1;
}
    else {
        acc[fruit] = 1
    }
  return acc;
},{});


console.log(tally); // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

const multidimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const flattenedArray = multidimensionalArray.reduce( (total, amount) => {
  return [...total, ...amount];
}, []);

console.log(flattenedArray);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
**
 Create a function that flattens an array (that is, it should "unnest" a nested array).
 * @param {array} array e.g. `[[1, 3], [5, 10]]`
 * @returns {array} new, flattened array e.g. `[1, 3, 5, 10]`
 

const flattenArray = array => {
    
    return array.reduce((array1,array2)=>{

  let flattenArray = [...array1,...array2];
  return flattenArray;
});    
};
*/