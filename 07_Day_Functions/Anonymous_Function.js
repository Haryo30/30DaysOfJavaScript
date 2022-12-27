// Anonymous_Function
// Anonymous function without name
// const anonymousFun = function() {
//     console.log('I am an anonymous and my value is stored in anonymousFun')
// }
// Expression Function
const square = function(n) {
    return n * n
}
console.log(square(4))

// Self Invoking Functions
(function(n) {
    console.log(n * n)
})(2)
let squaredNum = (function(n) {
    return n * n
})(10)
console.log(squaredNum)