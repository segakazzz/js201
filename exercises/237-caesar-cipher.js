// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
function cipher(string, shift){
    let newString = ''
    console.log(string)
    for (let i=0; i< string.length; i++){
        let index = alphabet.indexOf(string[i].toLowerCase())
        //console.log(index + ' '  + (index + shift) + ' ' + ((index + shift) % 26))
        if (index === -1){
            newString += string[i]
        } else {
            newString += alphabet[(index + shift) % 26]
        }
    }
    return newString

}
console.log(cipher('Genius without education is like silver in the mine', 5))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'

function decipher(string,shift){
    let newString = ''
    console.log(string)
    for (let i=0; i< string.length; i++){
        let index = alphabet.indexOf(string[i].toLowerCase())
        //console.log(index + ' '  + (index + shift) + ' ' + ((index + shift) % 26))
        if (index === -1){
            newString += string[i]
        } else {
            let tmp = index - shift
            tmp = tmp < 0 ? tmp + 26 : tmp
            newString += alphabet[tmp % 26]
        }
    }
    return newString

}

console.log(decipher('cvvcem cv fcyp!', 2))
console.log( decipher('ehz czlod otgpcrpo ty l hzzo', 11))
