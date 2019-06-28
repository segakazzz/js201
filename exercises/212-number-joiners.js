// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'

function numberJoinerWhile(startNumber, endNumber){
    let arr = []
    let num = startNumber
    while(num <= endNumber){
        arr.push(num)
        num++
    }
    return arr.join('_')
}
console.log(numberJoinerWhile(1, 10)) // --> '1_2_3_4_5_6_7_8_9_10'
console.log(numberJoinerWhile(12, 14)) //--> '12_13_14'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.


function numberJoinerFor(startNumber, endNumber){
    let arr = []
    for (let num = startNumber; num <= endNumber; num++ ){
        arr.push(num)
    }
    return arr.join('_')
}

console.log(numberJoinerFor(1, 10)) // --> '1_2_3_4_5_6_7_8_9_10'
console.log(numberJoinerFor(12, 14)) //--> '12_13_14'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3


function numberJoinerFancy(startNumber, endNumber, separator){
    separator = separator || '_'
    let arr = []
    for (let num = startNumber; num <= endNumber; num++ ){
        arr.push(num)
    }
    return arr.join(separator)   
}
console.log(numberJoinerFancy(1, 10)) //--> '1_2_3_4_5_6_7_8_9_10'
console.log(numberJoinerFancy(1, 5, '~')) //--> 1~2~3~4~5
console.log(numberJoinerFancy(3, 6, '***BANANAS***')) //--> 1***BANANAS***2***BANANAS***3

