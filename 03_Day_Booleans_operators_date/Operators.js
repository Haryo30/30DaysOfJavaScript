// Assignment operators
// An equal sign in JavaScript is an assignment operator. It uses to assign a variable.

// Assignment Operators
let descriptions1 = 'x = y same as x = y'
let descriptions2 = 'x += y same as x = x + y'
let descriptions3 = 'x -= y same as x = x - y'
let descriptions4 = 'x *= y same as x = x * y'
let descriptions5 = 'x /= y same as x = x / y'
let descriptions6 = 'x %= y same as x = x % y'
let descriptions7 = 'x **= y same as x = x ** y'

let num = 3
let numPlus = 3
let numMin = 3
let numMultiplication = 3
let numDivision = 3
let numModulus = 5
let numExponential = 3

num = num
numPlus += num 
numMin -= num
numMultiplication *= num
numDivision /= num
numModulus %= num
numExponential **= num


console.log( numExponential, descriptions7)

// Arithmetic Operators

/**
 * Addition(+): a + b
 * Subtraction(-): a - b
 * MultiPlication(*): a * b
 * Division(/): a / b
 * Modulus(%): a % b
 * Exponential(**): a ** b
 * 
*/

console.log(num, numPlus, numMin, numMultiplication, numDivision, numModulus, numExponential)

// Comparison Operators

console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

// Logical Operators

// && ampersand operator example
/**
const check = 4 > 3 && 10 > 5         // true && true -> true
const check = 4 > 3 && 10 < 5         // true && false -> false
const check = 4 < 3 && 10 < 5         // false && false -> false
 */

// || pipe or operator, example
/** 
const check = 4 > 3 || 10 > 5         // true  || true -> true
const check = 4 > 3 || 10 < 5         // true  || false -> true
const check = 4 < 3 || 10 < 5         // false || false -> false
*/

//! Negation examples
/** 
let check = 4 > 3                     // true
let check = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true
*/

/**
 * Increment Operator
 * 1. Pre-increment
 */

let count = 0
console.log(++count)        // 1
console.log(count)          // 1

// 2. Post-increment
console.log(count++)        // 0
console.log(count)          // 1

// Decrement Operator
// 1. Pre-decrement
console.log(--count) // -1
console.log(count)  // -1

// 2. Post-decrement
console.log(count--) // 0
console.log(count)   // -1

// Ternary Operators
// Pengganti rumus if & else untuk code yang lebih simple

condition ? value1 : value2

// contoh:
let x = 10;
let y = 20;

let max = (x > y) ? x : y;
console.log(max); // Output: 20
// diatas mengevaluasi nilai x yang dimana ternyata y lebih besar dari x dan nilainya di kembalikan ke max

let score = 80;
let grade = (score > 90) ? 'A' : (score >= 80) ? 'B' : (score > 70) ? 'C' : 'D';
console.log(grade)

// Operator Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence