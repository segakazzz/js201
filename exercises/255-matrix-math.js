// Write a function "matrixAdd" which is given two two-dimensional arrays, and
// returns a new two-dimensional array containing their matrix sum.
// Example:
// > matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
// [ [ 6, 5 ], [ 3, 4 ] ]

function matrixAdd(mat1, mat2){
    let newMatrix = []
    for (let i = 0; i < mat1.length; i++){
        let subSeries = []
        for(let j=0; j < mat1[i].length; j++){
            subSeries.push(mat1[i][j] + mat2[i][j])
        }
        newMatrix.push(subSeries)
    }    
    return newMatrix
}

console.log(matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "matrixMultiply" which is given two two-dimensional arrays;
// you can assume the matricies are of size 2x2.
// It should return the result of matrix multiplication of the two matricies.
// What is matrix multiplication? https://tinyurl.com/j6jgh2u
//
// Example:
// > matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
// [ [22,  8], [27, 10] ]

function matrixMultiply(mat1, mat2){
    let newMatrix = []
    for (let i = 0; i < mat1.length; i++){
        let subSeries = []
        for(let j=0; j < mat1[i].length; j++){
            console.log('-------------')
            let element = 0
            for(let k=0; k<mat2.length; k++){
                element += mat1[i][k] * mat2[k][j]
                console.log(mat1[i][k] * mat2[k][j])
            }
            subSeries.push(element)
        }
        newMatrix.push(subSeries)
    }
    return newMatrix
}
console.log(matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]))