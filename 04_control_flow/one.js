 // if and else
const isUserloggedIn = true;
const temp = 41

if(temp<40){
    console.log("It's cold");
}
else{
    console.log("It's hot");
}
// <, >, <=, >=, ==, ===, !=, !==

const score = 200
if(score>100){
    var power = "fly"
    console.log(`You have the power to ${power}`)
}
console.log(`You have the power to ${power}`)
// ------------------------------------------------------------
const balance = 1000

if(balance > 500) console.log("You have enough balance")

if (balance < 500) {
    console.log("less than 500")
}
else if (balance <750) {
    console.log("less than 750")
}
else if (balance < 900) {
    console.log("less than 900")
}
else {
    console.log("less than 1200")
}
// ------------------------------------------------------------
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("You can make the payment")
}
if( loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in")
}