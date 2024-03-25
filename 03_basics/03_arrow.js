const user = {
    username: "Nikhil",
    price: 100,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website` )
        console.log(this)
    },  
}
user.welcomeMessage()
user.username = "Vicky"
user.welcomeMessage()
console.log(this)
function chai(){
    let username = "Nikhil"
    console.log(this.username);
}
chai()
const chai = function (){
    let username = "Nikhil"
    console.log(this.username);
}
const chai =  () =>{
    let username = "Nikhil"
    console.log(this.username);
}

chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2 //explicit return
// }

// if {} curly braces are used then return keyword is must
const addTwo = (num1,num2) => (num1 + num2) //implicit return
console.log(addTwo(5,6))

// const myArray = [1,2,3,4,5]
// myArray