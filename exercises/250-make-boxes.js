// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function makeSquare(number) {
    let string = ''
    for(let i=0; i < number; i++){
        string += '*'.repeat(number)
        if (i !== number - 1){
            string += '\n'
        }
    }
    return string
}

console.log(makeSquare(5))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox(width, height) {
    let string = ''
    for(let i=0; i<height; i++){
        if(i === 0 || i === height - 1){
            string += '*'.repeat(width)
        } else {
            string += '*'
            string += ' '.repeat(width - 2)
            string += '*'
        }
        if(i !== height - 1){
            string += '\n'
        }
    }
    return string
}

console.log(makeBox(6,4))


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner(message) {
    let string = ''
    string += '*'.repeat(message.length + 4) 
    string += '\n'
    string += '* ' + message + ' *'
    string += '\n'
    string += '*'.repeat(message.length + 4)
    return string
}

console.log(makeBanner('Welcome to DigitalCrafts'))