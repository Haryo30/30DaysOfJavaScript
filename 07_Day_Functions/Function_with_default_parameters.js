// Function_with_default_parameters
// syntax
// Declaring a function
// function functionName(params = value) {
    // codes
// }

// Calling function
// functionName()
// functionName(arg)

// Example
// function greetings(name = 'Peter') {
//     let message = `${name}, welcome to 30 Days Of Javascript!`
//     return message
// }
// console.log(greetings())
// console.log(greetings('Haryo'))

// function generateFullName(firstName = 'Haryo', lastName = 'Dewantoro') {
//     let space = ' '
//     let fullName = firstName + space + lastName
//     return fullName
// }

// console.log(generateFullName())
// console.log(generateFullName('David', 'Gueta'))

// function calculateAge(birthYear, currentYear = 2022) {
//     let age = currentYear - birthYear
//     return age
// }
// console.log(`Age: `, calculateAge(1995))

function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + ' N'
    return weight    
}
console.log('weight of an object in Newton ', weightOfObject(100))
console.log('weight of an object in Newton ',weightOfObject(100, 1.62))

