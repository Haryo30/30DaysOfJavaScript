// Declaring different variables of different data types
let space = ' '
let firstName = 'Haryo'
let lastName = 'Dewantoro'
let country = 'Indonesia'
let city = 'Bekasi'
let language = 'JavaScript'
let job = 'FullStack'
let age = 27
// Concatenating using addition operator
let fullName = firstName + space + lastName // concatenantion, merging two string together.
console.log(fullName)

let personInfoOne = fullName + '. I am ' + age + '. I love in ' + country //ES5
console.log(personInfoOne)

// Concatenantion: Template Literals(Template Strings)
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I learn ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)