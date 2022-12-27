// Creating an array using split
let js = 'JavaScript'
const charsInJavaScript = js.split('') 

console.log(charsInJavaScript) //['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies)
/**[
  'Facebook',
  ' Google',
  ' Microsoft',
  ' Apple',
  ' IBM',
  ' Oracle',
  ' Amazon'
]*/