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
console.log(loginUserMessage())