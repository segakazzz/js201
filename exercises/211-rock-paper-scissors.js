// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'

function rockPaperScissors(player1, player2){
    let arr = ['rock', 'scissors', 'paper']
    let result = arr.indexOf(player1) - arr.indexOf(player2)
    //console.log(result)
    switch (result){
        case 0:
            return 'draw'
        case 1:
        case -2:    
            return 'player 2'
        case 2:
        case -1:
            return 'player 1'
        case -2:
            return 'player 2'            
    }

}
console.log(rockPaperScissors('rock', 'scissors'))
console.log(rockPaperScissors('rock', 'paper') )
console.log(rockPaperScissors('paper', 'paper') )