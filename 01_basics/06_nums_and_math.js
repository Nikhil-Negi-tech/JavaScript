const score = 400
const balance = new Number(100)
console.log(balance)  // [Number: 100]
console.log(balance.toString().length) // 3
console.log(balance.toFixed(2)) // 100.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)) // 23.9

const hundreds = 1000000
console.log(hundreds.toLocaleString())
// ******************************* Maths ********************************
console.log(Math)
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.8)) // 5
console.log(Math.floor(4.9)) // 4
console.log(Math.ceil(4.1)) // 5
console.log(Math.min(8, 3, 4, 5, 6)) // 3
console.log(Math.max(2, 3, 4, 5, 6)) // 6

console.log((Math.random()*10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//this will generate the random number between 10 and 20 by using the formula Math.floor(Math.random() * (max - min + 1)) + min

