// Write a function "gcd" that returns the Greatest Common Divisor of two numbers
// If no GCD exists, return 1
// Greatest Common Divisor --> https://tinyurl.com/gr84qca
//
// Examples:
// gcd(5, 1) --> 1
// gcd(3, 15) --> 3
// gcd(50, 20) --> 10

function gcd(a, b){
    let minNumber = ( a > b) ? b : a
    for (let i=minNumber; i > 0; i--){
        if (a % i === 0 && b % i === 0){
            return i
        }
    }
    return 1
}

console.log(gcd(5, 1)) //--> 1
console.log(gcd(3, 15)) //--> 3
console.log(gcd(50, 20)) //--> 10


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o
//
// Examples:
// factors(1) --> [1]
// factors(12) --> [1, 2, 3, 4, 6, 12]
// factors(42) --> [1, 2, 3, 6, 7, 14, 21, 42]

function factors(number){
    let array = []
    for (let i = 1; i <= number; i++){
        if (number % i === 0){
            array.push(i)
        }
    }
    return array
}
console.log(factors(1)) // --> [1]
console.log(factors(12)) //--> [1, 2, 3, 4, 6, 12]
console.log(factors(42)) //--> [1, 2, 3, 6, 7, 14, 21, 42]