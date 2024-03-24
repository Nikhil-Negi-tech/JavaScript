// singleton

//object literals
// Object.create({})

const mySym = Symbol("key1")
const JsUser = {
    name: "Nikhil",
    "fullName": "Nikhil Kumar", //cannot access this property using dot operator
    [mySym]: "myKey1",
    age: 21,
    location: "India",
    email: "nikhil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) // this is useful when we have to access the object property dynamically
// console.log(JsUser["fullName"])
// console.log(JsUser[mySym])

// JsUser.email = "nikhil@chatgpt.com"
// Object.freeze(JsUser) //freeze the object so that no one can modify the object
JsUser.email = "nikhil@microsoft.com"
console.log(JsUser)

JsUser.greeting = function () {
    console.log("hello Js User")
}
JsUser.greetingTwo = function () {
    console.log(`hello Js User, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());