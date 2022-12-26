// soal satu bisa klik link dibawah
// const link = require("./05_day_starter/main")

// 2.
let text = 'i love teaching and empowering people. I teach HTML, CSS, JS, React, Python'
// let result = text.split(' ')
// console.log(result)

// const noPunctuation = text.replace(/[^\w\s]/gi, '')
// console.log(noPunctuation)

// console.log(result.length)

// 3.
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// shoppingCart.unshift('Meat')
// shoppingCart.push('Sugar')
// shoppingCart.pop()
// shoppingCart[2] = 'Green Tea'
// console.log(shoppingCart)

// 4.
// let findCountries = 'Canada'
// let filter = findCountries.toLowerCase()
// let filtered = filter.charAt(0).toUpperCase() + filter.slice(1)

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

// if (countries.includes(filtered)){
//     console.log(filtered)
// } else {
//     countries.push(findCountries)
//     console.log(countries)
// }

// 5.
// let findwebtech = 'Ass'
// let filter = findwebtech.toLowerCase()
// let filtered = filter.charAt(0).toUpperCase() + filter.slice(1)

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

//   if (webTechs.includes(findwebtech)) {
//     console.log(filtered)
//   } else {
//     webTechs.push(findwebtech)
//     console.log(`${filtered} is not found`)
//   }

// 6.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)
