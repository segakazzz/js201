// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'


function longLongVowels(string){
    let vowels = ['a', 'i', 'u', 'e','o']
    let newString = ''
    let index = 0
    while(index < string.length){
        if(index !== string.length - 1 
             && string[index] === string[index+1] && vowels.indexOf(string[index]) !== -1){
            newString += string[index].repeat(5)
            index++    
        } else {
            newString += string[index]
        }
        index++;
    }
    return newString
}
