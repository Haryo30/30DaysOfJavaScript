// Arrow_Function

// normal or declaration function
// function square(n) {return n * n}
// console.log(square(2))
// change to an arrow function
// const square = n => { return n * n}
// console.log(square(2))
/** Or */
// const square = n => n * n
// console.log(square(2))

// const changeToUpperCase = arr => {
//     const newArr = []
//     for (const element of arr) {
//         newArr.push(element.toUpperCase())
//     }
//     return newArr
// }
// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// console.log(changeToUpperCase(countries))


// const printFullName = (firstName, lastName) => {
//     return `${firstName} ${lastName}`
// }
// console.log(printFullName('Haryo', 'Dewantoro'))
// change to an arrow function
// const printFullName = (firstName, lastName) => `${firstName} ${lastName}`
// console.log(printFullName('Haryo', 'Dewantoro'))

// with_arrow_functions
// syntax
// Declaring a function
// const functionName = (param = value) => {
    // codes
// }
// calling function
// functionName()
// functionName(arg)

// Example:
const greetings = (name = 'Peter') => {
    let message = name + ', welcome to 30 Days Of Javascript!'
    return message
}

console.log(greetings())
console.log(greetings('Haryo'))

const generateFullName = (firstName = 'Asabeneh', lastName = 'Yetayeh') => {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}

console.log(generateFullName())


const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear
console.log('Age: ', calculateAge(1819))

const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
  
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon