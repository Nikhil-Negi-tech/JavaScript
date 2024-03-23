const name  = "Nikhil";
const repoCount = 20;
console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and I have ${repoCount} repositories on GitHub`) 
// Backticks are used to write the string in the template literal form.
// It is used to write the string in the multiple lines and also used to write the string with the variables.

const gameName = new String('GTA-V')

console.log(gameName[0]) // G
console.log(gameName.__proto__) // String
//__proto__ is used to check the prototype of the object.


console.log(gameName.length) // 5
console.log(gameName.toLowerCase()) // gta-v
console.log(gameName.charAt(4)) // V
console.log(gameName.indexOf('T')) // 1

const newString = gameName.substring(0, 3)
console.log(newString) // GTA

const anotherString = gameName.slice(0, 5) 
console.log(anotherString) // GTA-V

const newStringOne = "   nikhil    "
console.log(newStringOne) //    nikhil
console.log(newStringOne.trim()) // nikhil

const url = "https://www.google.com"
console.log(url.replace('google','nikhil')) // https://www.nikhil.com
console.log(url.includes('google')) // true

console.log(gameName.split('-')) // [ 'GTA', 'V' ]

