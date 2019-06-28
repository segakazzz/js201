// Write a function "max" that takes an array of numbers returns the highest
// number in the array.

function max(numberArray){
    let maxIndex = 0
    for(let i=0; i < numberArray.length; i++){
        if(numberArray[maxIndex] < numberArray[i]){
            maxIndex = i
        }    
    }
    return numberArray[maxIndex]
}
console.log(max([1, 4, 8])) 



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13

function sumNumbers(numberArray){
    let sum = 0
    for(let i=0; i< numberArray.length; i++){
        sum += numberArray[i]
    } 
    return sum
}
console.log(sumNumbers([1, 4, 8]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []

function positives(numberArray){
    let array = []
    for(let i=0; i<numberArray.length; i++){
        if (numberArray[i] > 0){
            array.push(numberArray[i])
        }
    }
    return array
}

console.log(positives([1, -3, 5, -3, 0])) // --> [1, 5]
console.log(positives([1, 2, 3])) // --> [1, 2, 3]
console.log(positives([-1, -2, -3])) // --> []

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js

function evens(numberArray){
    let array = []
    for(let i=0; i<numberArray.length; i++){
        if (numberArray[i] % 2 === 0){
            array.push(numberArray[i])
        }
    }
    return array
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js

function odds(numberArray){
    let array = []
    for(let i=0; i<numberArray.length; i++){
        if (numberArray[i] % 2 === 1){
            array.push(numberArray[i])
        }
    }
    return array
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]

function integers(numberArray){
    let array = []
    for(let i=0; i<numberArray.length; i++){
        if (Number.isInteger(numberArray[i])){
            array.push(numberArray[i])
        }
    }
    return array
}
console.log(integers([3.14, 2.4, 7, 8.1, 2]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]
function squareDance(numberArray){
    let array = []
    for(let i=0; i<numberArray.length; i++){
        array.push(numberArray[i] ** 2 )
    }
    return array
}

console.log(squareDance([1, 2, 3]))