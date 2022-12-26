// Arrays

// How to create an empty array
// Using Array constructor
// const arr = Array()
// or
// let arr = new Array()
// console.log(arr) //[]

// Using square brackets([])
// const arr = []
// console.log(arr) //[]

// Array with initial values.
// const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
// const fruits = ["banana", "orange", "mango", "lemon"];
// const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];
// const animalProducts = ["milk", "meat", "butter", "yoghurt"];
// const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"];
// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];

// Print the array and its length
// console.log("Numbers:", numbers); // Numbers: [ 0, 3.14, 9.81, 37, 98.6, 100 ]
// console.log('Number of Numbers:', numbers.length) // Number of Numbers: 6
// console.log('Fruits:', fruits); //Fruits: [ 'banana', 'orange', 'mango', 'lemon' ]
// console.log('Number of fruits:', fruits.length) //Number of fruits: 4

// Array can have items of different data types
// const arr = [
//   'Haryo',
//   250,
//   true,
//   {country: 'Indonesia', city: 'Bekasi'},
//   {skills: ['HTML', 'CSS', 'JS', 'React', 'Python']}
// ] 
// console.log(arr[4].skills[2]) //JS

// Creating an array using split
// let js = 'JavaScript'
// const charsInJavaScript = js.split('') 

// console.log(charsInJavaScript) //['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

// let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// const companies = companiesString.split(',')

// console.log(companies)
/**[
  'Facebook',
  ' Google',
  ' Microsoft',
  ' Apple',
  ' IBM',
  ' Oracle',
  ' Amazon'
]*/


// Accessing array items using index
// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let firstFruit = fruits[0]

// console.log(firstFruit) //banana

// let lastIndex = fruits.length - 1
// lastfruit = fruits[lastIndex]

// console.log(lastfruit)
/**------------------------------------------------------------------------------------*/
// const numbers = [0, 3.14, 9.81, 98.6, 100]

// console.log(numbers.length)
// console.log(numbers)
// console.log(numbers[0])
// console.log(numbers[4])

// let lastIndex = numbers.length - 2;
// console.log(numbers[lastIndex])

// const webTechs = [
//   'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'
// ]

// Modifying array element
// const numbers = [1, 2, 3, 4, 5]
// numbers[0] = 10
// numbers[1] = 20
// console.log(numbers)

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]
// countries[0] = 'Afghanistan'
// let lastIndex = countries.length - 1
// countries[lastIndex] = 'Koreas'

// console.log(countries)

// Methods to manipulate array
// const arr = Array()
// console.log(arr)

// const eightEmptyValues = Array(8)
// console.log(eightEmptyValues)

// Creating static values with fill
// const eightXvalues = Array(7).fill('X')
// console.log(eightXvalues)

// Concatenating array using concat
// const firstList = [1, 2, 3]
// const secondList = [4, 5, 6]
// const thirdList = firstList.concat(secondList)

// console.log(thirdList)

// Check an element if it exist in an array.
// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let index = fruits.indexOf('avocado')

// if (index === -1){
//   console.log(`This fruit does not exist in the array`)
// } else {
//   console.log('This fruit does exxis in the array')
// }

// we can use also ternary here
// index === -1 ? console.log(`This fruit does not exist in the array`) : console.log('This fruit does exxis in the array')

// Getting last index of an element in array
const numbers = [1, 2, 3, 4, 5, 3, 1, 2]
// console.log(numbers.lastIndexOf(2)) //7

// true or false
// console.log(numbers.includes(5)) //true

// Checking array
// console.log(Array.isArray(number)) //false

// Converting array to string
// console.log(numbers.toString()) //1,2,3,4,5,3,1,2

// Joining array elements
// console.log(numbers.join(' # ')) //1 # 2 # 3 # 4 # 5 # 3 # 1 # 2

// Slice array elements
// console.log(numbers.slice(1,5)) //[ 2, 3, 4, 5 ]

// Splice method in array
// numbers.splice(0,5)
// console.log(numbers) // remove the first item

// Adding item to an array using .push()
// const arr = ['item1', 'item2', 'item3']
// arr.push('new item')
// console.log(arr)

// numbers.pop() // -> remove one item from the end
// console.log(numbers)

numbers.shift() // -> remove one item from the beginning
console.log(numbers)

numbers.unshift(0) // -> add one item from the beginning
console.log(numbers)

numbers.reverse() // -> reverse array order
console.log(numbers)

