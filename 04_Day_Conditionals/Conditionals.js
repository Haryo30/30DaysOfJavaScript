/**
 * 1. if
 * 
// syntax
if (condition) {
  //this part of code runs for truthy condition
} 
 * 
 */

let num = 3;
if (num > 0) {
  console.log(`${num} is a positive number`);
}

let isRaining = true;
if (isRaining) {
  console.log("Remember to take your rain coat");
}

/**
 * 2. If Else
 * 
// syntax
if (condition) {
  // this part of code runs for truthy condition
} else {
  // this part of code runs for false condition
}
 * 
 */

if (num > 4) {
  console.log(`${num} is a positive number`);
} else {
  console.log(`${num} is a negative number`);
}
//  -3 is a negative number

if (isRaining) {
  console.log("You need a rain coat");
} else {
  console.log("No nned for a rain coat");
}
// You need a rain coat.

/**
 * 3. If Else if Else
 * 
 // syntax
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code

}
 * 
 */

let a = 0;
if (a > 0) {
  console.log(`${a} is a positive number`);
} else if (a < 0) {
  console.log(`${a} is a negative number`);
} else if (a === 0) {
  console.log(`${a} is zero`);
} else {
  console.log(`${a} is nor a number`);
}

// if else if else
let weather = "sunny";
if (weather === "rainy") {
  console.log("You need a rain coat.");
} else if (weather === "cloudy") {
  console.log("It might be cold, you need a jacket.");
} else if (weather === "sunny") {
  console.log("Go out freely.");
} else {
  console.log("No need for rain coat.");
}

/**
 * 4. Switch
 * 
switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
   // code
   break
  default:
   // code
}
 * 
 */

let cuaca = "cloudy";
switch (cuaca) {
  case "rainy":
    console.log("You need a rain coat.");
    break;
  case "cloudy":
    console.log("It might be cold, need a jacket.");
    break;
  case "sunny":
    console.log("Go out freely");
    break;
  default:
    console.log("No need for rain coat");
}

// Switch More Examples
// using methid promt() we you connecting to HTML
let dayUserInput = prompt("What day is today?");
let day = dayUserInput.toLowerCase();

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log(`It's not a week day.`);
}

let masukan = prompt("enter number");
switch (true) {
  case masukan > 0:
    console.log("Number is Positif");
    break;
  case masukan == 0:
    console.log("Number is Zero");
    break;
  case masukan < 0:
    console.log("Number is negative");
  default:
    console.log("entered value wat not a number");
}

// Ternary Operators
// Get variable in line 16
let casevalue = value;
casevalue
  ? console.log("result") : console.log("result");

  (kondisi) ? nilai_jika_true : nilai_jika_false
  
  let a = 4;
  let b = 3;
  let result = (a > b) ? a : b;
  
  console.log(result); // Output: 4
  