// Primitive data-types
// 7 types: Number, String, Boolean, Undefined, Null, Symbol, BigInt
const score = 100; //number
const scoreValue = 100.5; //number

const isLoggedIn = false; //boolean
const outsideTemp = null; //object
let userEmail;

const id = Symbol('123') //symbol
const anotherId = Symbol('123') //symbol
// console.log(id === anotherId) // false

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


// +++++++++++++++++++++++++++++++++++++++++++++++++ Memory Allocation +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive),Heap(Non-Primitive)

    let myYoutubename = "CodeWithNikhil"; 
    let anothername = myYoutubename; 
    anothername = "CodeWithNikhil2";
    console.log(myYoutubename) // CodeWithNikhil
    console.log(anothername) // CodeWithNikhil2
    // In this case, myYoutubename and anothername are stored in stack memory and they are independent of each other beacause stack store the copy of myYoutubename value.

    let userOne = {
        email: "user@gmail.com",
        upi: "user@upi"
    }
    let userTwo = userOne;
    userTwo.email = "user2@gmail.com"
    console.log(userOne.email) 
    console.log(userTwo.email)
    // In this case, userOne and userTwo are stored in heap memory and they are dependent of each other beacause heap store the reference of the userOne object. 
    // So, if we change the userTwo object then it will also change the userOne object.