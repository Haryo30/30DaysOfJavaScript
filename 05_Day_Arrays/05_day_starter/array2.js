// Array with initial values.
const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
const fruits = ["banana", "orange", "mango", "lemon"];
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];
const animalProducts = ["milk", "meat", "butter", "yoghurt"];
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"];
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];

// Print the array and its length

console.log("Numbers:", numbers); // Numbers: [ 0, 3.14, 9.81, 37, 98.6, 100 ]
console.log('Number of Numbers:', numbers.length) // Number of Numbers: 6
console.log('Fruits:', fruits); //Fruits: [ 'banana', 'orange', 'mango', 'lemon' ]
console.log('Number of fruits:', fruits.length) //Number of fruits: 4

// Array can have items of different data types
const arr = [
  'Haryo',
  250,
  true,
  {country: 'Indonesia', city: 'Bekasi'},
  {skills: ['HTML', 'CSS', 'JS', 'React', 'Python']}
] 
console.log(arr[4].skills[2]) //JS

