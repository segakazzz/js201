// TIP: check out this reference for how to sort arrays:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "alphaSort" that sorts an array of strings alphabetically.
//
// Examples:
// alphaSort(['b', 'a', 'c'])
// > ['a', 'b', 'c']

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

function alphaSort(array){
    let newArray = []
    while (array.length > 0){
        let target = array[0];
        for(let i=0 ; i< array.length ; i++){
            if(alphabet.indexOf(target[0]) > alphabet.indexOf(array[i][0]))
                target = array[i]      
        }
        newArray.push(target)
        array.splice(array.indexOf(target), 1)
        console.log(array)
    }
    return newArray
}

console.log(alphaSort(['wxy', 'wxyz', 'bac', 'cab', 'abc']))


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "strLengthSort" that sorts an array of strings by how long
// each string is. Put the shortest strings first.
//
// Examples:
// strLengthSort(['Apple', 'Banana', 'Cherry'])
// > ['Apple', 'Cherry', 'Banana']

function strLengthSort(array){
    let newArray = []
    while (array.length > 0){
        let target = array[0];
        for(let i=0 ; i< array.length ; i++){
            if(target.length > array[i].length)
                target = array[i]      
        }
        newArray.push(target)
        array.splice(array.indexOf(target), 1)
        console.log(array)
    }
    return newArray    
}
console.log(strLengthSort(['one', 'two', 'three', 'four', 'no', 'more']))
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumSort". Given an array of array of numbers like:
// var arr = [
//   [1, 3, 4],
//   [2, 4, 6, 8],
//   [3, 6]
// ];
//
// Sort the array by the sum of each inner array. For the above example, the
// respective sums for each inner array is 8, 20, and 9.
//
// Example:
// sumSort([
//   [9, 1, 9],
//   [2],
//   [4, 5]
// ])
// > [[2], [4, 5], [9, 1, 9]]


function sumSort(array){
    let newArray = []
    while (array.length > 0){
        let target = array[0];
        for(let i=0 ; i< array.length ; i++){
            if(sumArray(target) > sumArray(array[i]))
                target = array[i]      
        }
        newArray.push(target)
        array.splice(array.indexOf(target), 1)
        console.log(array)
    }
    return newArray    
}

function sumArray(array){
    let sum = 0
    for(let i=0; i< array.length; i++){
        sum += array[i]
    }
    return sum
}

console.log(sumSort([
       [9, 1, 9],
       [2],
       [4, 5]
 ]))
