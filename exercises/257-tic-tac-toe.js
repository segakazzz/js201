// Write a function "ticTacToe" which takes a two-dimensional array of size 3x3.
// Each cell in the two dimensional array can be one of 'O', 'X', or null.
// Return 'O' if O makes a winning row.
// Return 'X' if X makes a winning row.
// Return null if there is no winning row on the board.
//
// Examples:
// > ticTacToe([
//   ['O', 'O', 'O'],
//   ['X', null, 'X'],
//   [null, 'X', null]
//   ])
// 'O'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'X', null],
//   [null, 'X', null]
//   ])
// 'X'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'O', null],
//   [null, 'X', 'X']
//   ])
// null

function ticTacToe(matrix){  
    //Check horizonal
    console.log('Check Horizonal...')
    let counter = initializeCounter()
    for(let i=0; i < matrix.length; i++){
        counter = initializeCounter()
        for(let j=0; j < matrix[i].length; j++){
            counter[matrix[i][j]]++
        }
        if (checkCounter(counter)) return checkCounter(counter)
    }
    //Check vertical
    console.log('Check Vertical...')
    for(let j=0; j < matrix.length; j++){
        counter = initializeCounter()
        for(let i=0; i < matrix[j].length; i++){
            counter[matrix[i][j]]++
        }
        if (checkCounter(counter)) return checkCounter(counter)
    }
    //Check diagonal
    console.log('Check Diagonal...')

    counter = initializeCounter()

    for(let k=0; k < matrix.length; k++){
            counter[matrix[k][k]]++
            if (checkCounter(counter)) return checkCounter(counter)
        }

    counter = initializeCounter()

    for(let k=0; k < matrix.length; k++){
        //console.log(k, matrix.length - 1, matrix[k][matrix.length - k - 1])
        counter[matrix[k][matrix.length - k - 1]]++
        if (checkCounter(counter)) return checkCounter(counter)
    }
    return null
}

function initializeCounter(){
    return {
        O : 0, 
        X : 0
    }
}

function checkCounter(counter){
    if (counter.O === 3){
        return 'O'
    } else if (counter.X === 3){
        return 'X' 
    } else {
        return null
    }
}

console.log(ticTacToe([
      ['O', 'X', 'X'],
      [null, 'X', 'O'],
      [null, 'O', 'X']
      ])
)