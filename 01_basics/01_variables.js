//const is used to declare a constant variable, meaning its value cannot be changed once it is assigned.
const accountId = 144553 
// let is used to declare a block-scoped variable, meaning it is only accessible within the block ({}) where it is defined.
let accountEmail = "nikhil@gmail.com"
// var is used to declare a function-scoped variable. However, it is considered outdated and not recommended for modern JavaScript development.
var accountPassword = "12345" 
accountCity = "Delhi"

// accountId = 2 // not allowed
accountEmail = "negi@gmail.com"
accountPassword = "54321"
accountCity = "Mumbai"

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])