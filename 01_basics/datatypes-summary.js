// Primitive data-types
// 7 types: Number, String, Boolean, Undefined, Null, Symbol, BigInt
const score = 100; //number
const scoreValue = 100.5; //number

const isLoggedIn = false; //boolean
const outsideTemp = null; //object
let userEmail;

const id = Symbol('123') //symbol
const anotherId = Symbol('123') //symbol
console.log(id === anotherId) // false

const bigIntValue = 1234567890123456789012345678901234567890n //bigint

// Reference data-types(Non-Primitive)
// 3 types: Object, Array, Function

const heroes = ["shaktimaan", "naagraj", "doga"] //object
let myObj = {
    name: "nikhil",
    age: 21
}   //object
const myFunction = function() {
    console.log("Hello World")
}   //function
