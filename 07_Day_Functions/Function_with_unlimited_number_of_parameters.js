// Function_with_unlimited_number_of_parameters
// function sumAllNums() {
//     console.log(arguments)
// }
// sumAllNums(1,2,3,4)
// Arguments(4) [1,2,3,4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// function declaration

function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
// Objek arguments merupakan sebuah objek yang tersedia secara otomatis
console.log(sumAllNums(1, 2, 3, 4, 5)) // 15
console.log(sumAllNums(10, 20, 13, 40, 10)) // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)) //173