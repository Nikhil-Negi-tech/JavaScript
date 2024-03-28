const userEmail = "nikhil@gmail.com"

if(userEmail){
    console.log("Email is valid")
}
else{
    console.log("Email is not valid")
}

// falsy values:
// false, 0, -0, BigInt(0), null, undefined, NaN, "", ``
// ___________________________________________________________________________________________________________________________________________________________________
//truthy values:
// true, {}, [], 42, "0", "false", new Date(), -42, 12n, 3.14, -3.14, Infinity, -Infinity, " ", "0", "false", "null", "undefined", "NaN", "[]", "{}", function(){}

// if(userEmail.length===0){
//     console.log("Array is empty")
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}
//_____________________________________________________________   

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 
// console.log(val1) //5

// val1 = null ?? 10
// console.log(val1) //10

// val1 = undefined ?? 10
// console.log(val1) //10

val1 = null ?? 10 ?? 20
console.log(val1) //10
// _____________________________________________________________

//Terinary Operator
//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("I will buy ice tea") : console.log("I will not buy ice tea")

