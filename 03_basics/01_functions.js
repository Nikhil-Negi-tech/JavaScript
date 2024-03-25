//function - block of code that can be called and executed later
function sayMyName(){
    console.log("N")
    console.log("I")
    console.log("K")
    console.log("H")
    console.log("I")
    console.log("L")
}
// sayMyName()

// function addTwoNumbers(a, b){
//     console.log(a + b);
// }

function addTwoNumbers(a, b){
    // let result = a + b
    // return result
    return a + b
}
const result = addTwoNumbers(10, 20)

// console.log("Result: ", result);

function loginUserMessage(username){
    if(username !== undefined){
        return `${username} has logged in`
    }
    return "Please provide a username"
}
// console.log(loginUserMessage("Nikhil"))
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){ 
    // rest operator is used to pass multiple arguments
    return num1
}
// console.log(calculateCartPrice(10,20,30)),

const user = {
    name: "nikhil",
    age: 22,
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.age}`)
}
//NOTE: always check type safety of parameters used in function

// handleObject(user)
handleObject({
    name: "nikhil",
    age: 22,
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(anyobject){
    console.log(`the second value is ${anyobject[1]}`)
}
returnSecondValue(myNewArray)
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))