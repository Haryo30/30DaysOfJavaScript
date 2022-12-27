// Unlimited_number_of_parameters_in_arrow_function
// const sumAllNums = (...args) => {
    // console.log(arguments), arguments object not found in arrow function
    // instead we use a parameter followed by spread operator (...)
    // console.log(args)
// }
// sumAllNums(1, 2, 3, 4) //[ 1, 2, 3, 4 ]

// function declaration

const sumAllNums = (...args) => {
    let sum = 0
    for (const element of args) {
        sum += element
    }
    return sum
}
console.log(sumAllNums(1,2,3,4))