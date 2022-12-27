// for Loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element)
}

for (let i = 0 ; i <= 5; i++) {
    console.log(`${i} * ${i} =  ${i * i}`)
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []

for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr);

// Adding all elements in the array
const numbers = [1, 2, 3, 4, 5]

for(let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
}

console.log(sum)

// Creating a new array based on the existing array
const newArr = []
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    newArr.push( numbers[i] ** 2)
}
console.log(newArr)