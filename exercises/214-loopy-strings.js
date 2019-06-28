// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

function reverse(str){
    let arr = []
    if (typeof str !== 'string'){
        return false
    }
    for(let idx = 0; idx < str.length; idx++){
        arr.push(str[str.length - idx - 1]);
    }
    return arr.join('')

}
console.log(reverse("skoob")) // books

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'

function findLongestWord(str){
    let arrString = str.split(' ')
    let arrLength = []
    for (let i = 0; i < arrString.length; i++ ){
        arrLength.push(arrString[i].length)
    }

    let maxLength = Math.max.apply(null, arrLength)
    return arrString[arrLength.indexOf(maxLength)]
}

console.log(findLongestWord('a book full of dogs'))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'

function nicer(str){
    let arrString = str.split(' ')
    let badWords = ['heck', 'darn', 'dang', 'crappy']
    for (let i = 0; i < arrString.length; i++){
        let idx = badWords.indexOf(arrString[i])
        if (idx ===  -1){
            arrString[i] = null
        } 
    }
    let filtered = arrString.filter(function(elem){
       return elem !== null 
    });

    return filtered.join(' ')
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

function capitalizeAll(str){
    let arrString = str.split(' ')
    let arrNewString = []
    for(let i = 0; i < arrString.length; i++){
        arrNewString.push(arrString[i].charAt(0).toUpperCase() + arrString[i].slice(1))
    }
    return arrNewString.join(' ')
}
console.log(capitalizeAll('hello world')) // --> 'Hello World'
console.log(capitalizeAll('every day is like sunday')) //--> 'Every Day Is Like Sunday'



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

function split(str, sep){
    let arr = []
    let lastIndex = 0
    for(let idx = 0; idx < str.length; idx++){
        console.log('IndexRange: ' + lastIndex + ','+ idx)
        if(str[idx] === sep){
            arr.push(str.substring(lastIndex, idx))
            lastIndex = idx + 1
            console.log(arr)
        }
    }
    arr.push()
    return arr
}

console.log(split('a-b-c', '-'))// --> ['a', 'b', 'c']
console.log(split('APPLExxBANANAxxCHERRY', 'xx'))// --> ['APPLE', 'BANANA', 'CHERRY']
console.log(split('xyz', 'r'))// --> ['xyz']
