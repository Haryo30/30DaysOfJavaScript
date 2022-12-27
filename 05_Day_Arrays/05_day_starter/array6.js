// Methods to manipulate array
const arr = Array()
console.log(arr)

const eightEmptyValues = Array(8)
console.log(eightEmptyValues)

// Creating static values with fill
const eightXvalues = Array(7).fill('X')
console.log(eightXvalues)

// Concatenating array using concat
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList)

// Check an element if it exist in an array.
const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('avocado')

if (index === -1){
  console.log(`This fruit does not exist in the array`)
} else {
  console.log('This fruit does exxis in the array')
}

// we can use also ternary here
index === -1 ? console.log(`This fruit does not exist in the array`) : console.log('This fruit does exxis in the array')

// Getting last index of an element in array
const numbers = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(numbers.lastIndexOf(2)) //7

// true or false
console.log(numbers.includes(5)) //true

// Checking array
console.log(Array.isArray(number)) //false

// Converting array to string
console.log(numbers.toString()) //1,2,3,4,5,3,1,2

// Joining array elements
console.log(numbers.join(' # ')) //1 # 2 # 3 # 4 # 5 # 3 # 1 # 2

// Slice array elements
console.log(numbers.slice(1,5)) //[ 2, 3, 4, 5 ]

// Splice method in array
numbers.splice(0,5)
console.log(numbers) // remove the first item

// Adding item to an array using .push()
const arr = ['item1', 'item2', 'item3']
arr.push('new item')
console.log(arr)

numbers.pop() // -> remove one item from the end
console.log(numbers)

numbers.shift() // -> remove one item from the beginning
console.log(numbers)

numbers.unshift(0) // -> add one item from the beginning
console.log(numbers)

numbers.reverse() // -> reverse array order
console.log(numbers)