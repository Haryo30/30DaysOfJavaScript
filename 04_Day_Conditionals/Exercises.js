// Exercises: Level 1
// A.
// let ageUserInput = prompt('Enter your age')
// let age = ageUserInput.toLowerCase()

// if (age >= 18) {
//     console.log(`You are old enough to drive`)
// } else if (age < 18) {
//     num = Math.abs(age -= 18)
//     console.log(`You are left with ${num} years to drive`);
// }

// B.
// const myAge = 27
// let yourAge = age.toLowerCase()

// if (yourAge < 27) {
//     result = Math.abs(yourAge -= 27 )
//     console.log(`You are ${result} years younger than me`)
// } else if (yourAge >= 27) {
//     yourAge -= 27
//     console.log(`You are ${yourAge} years older than me`)
// }

// C.
// let a = 4
// let b = 3
// let result = a

// if (result < b) {
//     console.log(`${a} is greater than ${b}`);
// } else if (result > b) {
//     console.log(`${b} is less than ${a}`);
// } else if (result < a) {
//     console.log(`${a} is less than ${b}`);
// } else if (result > a) {
//     console.log(`${a} is less than ${b}`);
// }

// D
// result < a ? console.log(`${a} is greater than ${b}`) :
// result > b ? console.log(`${b} is less than ${a}`) :
// result == b ? console.log(`number is ${b}`) :
// result == a ? console.log(`number is ${a}`) :
// console.log(result)

// E
// if else
// let num = 19

// if (num % 2 === 0 ) {
//     console.log(`${num} is an even number`)
// } else {
//     console.log(`${num} is an odd number`)
// }

// Ternary Operator
// let hasil = (num % 2 === 0) ? console.log(`${num} is an even number`) :
// console.log(`${num} is an odd number`);

// Exercises: Level 2
// A
// let nilai = 19

// if else
// if (nilai > 100) {
//   console.log(`please write a right number`);
// } else if (nilai >= 90 && nilai <= 100) {
//   console.log(`A`);
// } else if (nilai >= 70 && nilai <= 89) {
//   console.log(`B`);
// } else if (nilai >= 60 && nilai <= 69) {
//   console.log(`C`);
// } else if (nilai >= 50 && nilai <= 59) {
//   console.log(`D`);
// } else console.log(`You can relearning again`);

// Ternary Operator
// nilai > 100 ? console.log`please write a right number` :
// nilai >= 90 && nilai <= 100 ? console.log`A` :
// nilai >= 70 && nilai <= 89 ? console.log`B` :
// nilai >= 60 && nilai <= 69 ? console.log`C` :
// nilai >= 50 && nilai <= 59 ? console.log`D` :
// console.log(`You can relearning again`)

// B
// let season = "Auntum"

// season = "Auntum" ? console.log`September, October or November, the season is Autumn` :
// season = "Winter" ? console.log`December, January or February, the season is Winter` :
// season = "Spring" ? console.log`March, April or May, the season is Spring` :
// season = "Summer" ? console.log`June, July or August, the season is Summer` :
// console.log()

// let day = 'sunday'
// let resultday = day.toLowerCase()

// if (resultday === "monday") {
// console.log(`Monday is a working day`)
// } else if (resultday === "tuesday") {
//     console.log(`Tuesday is a working day`)
// } else if (resultday === "wednesday") {
//     console.log(`Wednesday is a working day`)
// } else if (resultday === "thursday") {
//     console.log(`Thursday is a working day`)
// } else if (resultday === "friday") {
//     console.log(`Friday is a working day`)
// } else if (resultday === "saturday") {
//     console.log(`Saturday is a weekend`)
// } else if (resultday === "sunday") {
//     console.log(`Sunday is a weekend`)
// }

// Exercises: Level 3
let month = "september";
let resultmonth = month.toLowerCase();

if (
  resultmonth == "january" ||
  resultmonth == "march" ||
  resultmonth == "may" ||
  resultmonth == "july" ||
  resultmonth == "august" ||
  resultmonth == "october" ||
  resultmonth == "december"
) {
  console.log(`${resultmonth} has 31 days`);
} else if (
  resultmonth == "april" ||
  resultmonth == "june" ||
  resultmonth == "september" ||
  resultmonth == "november"
) {
  console.log(`${resultmonth} has 30 days`);
} else if (resultmonth == "february") {
  console.log(`${resultmonth} has 28 days`);
}
