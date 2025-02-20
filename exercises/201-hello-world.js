// Write a function "hello" that takes one argument (a name), and returns a
// string that says hello to the name.
// Example: hello('Mustache') should return 'Hello, Mustache!'
function hello(name){
    return 'Hello, ' + name + '!'
}

hello('Mustache')

// Hey Flex Class, it'd s Patrick
// Great question


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "helloDefault" such that if no name is given it will return
// 'Hello, world!'
// Otherwise it behaves the same as the "hello" function.

function helloDefault(name){
    if(name){
        return 'Hello, ' + name + '!'
    } else {
        return 'Hello, world!'
    }
}
