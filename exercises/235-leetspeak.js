// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// HINT: What is the best data structure to represent the substitutions?
//
// Examples:
// leetspeak('Leet') --> "l337"
// leetspeak('ORANGE') --> "0r4n63"


function leetspeak(string){
    const obj = {
        A: 4,
        E: 3,
        G: 6,
        I: 1,
        O: 0,
        S: 5,
        T: 7
    }
    let newString = ''
    for (let i=0; i< string.length; i++){
        //console.log(obj[string[i].toUpperCase()])
        if(obj[string[i].toUpperCase()] !== undefined){
            newString += obj[string[i].toUpperCase()]
        } else {
            newString += string[i].toLowerCase()
        }
    }
    return newString

}
console.log(leetspeak('Leet'))
console.log(leetspeak('ORANGE'))