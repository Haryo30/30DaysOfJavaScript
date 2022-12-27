// for of loop

// for (const element of Array) {
// code here
// }

const numbers = [1, 2, 3, 4, 5];

// for (const num of numbers) {
//     console.log(num)
// } // 1 2 3 4 5

// for (const num of numbers) {
//     console.log(num * num)
// } // 1 4 9 16 25

// adding all the numbers in the array
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (const tech of webTechs) {
  // console.log(tech.toUpperCase())
  console.log(tech[0]);
}

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newArr = [];
for (const country of countries) {
  newArr.push(country.toUpperCase());
}

console.log(newArr);