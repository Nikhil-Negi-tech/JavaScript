// Primitive data-types
// 7 types: Number, String, Boolean, Undefined, Null, Symbol, BigInt
const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) // false

const bigIntValue = 1234567890123456789012345678901234567890n

// Reference data-types(Non-Primitive)
// 3 types: Object, Array, Function

const heroes = ["shaktimaan", "naagraj", "doga"]
let myObj = {
    name: "nikhil",
    age: 21
}
const myFunction = function() {
    console.log("Hello World")
}

console.log(typeof myFunction)