// const tinderUser = new Object();
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Nikhil"
tinderUser.isLoggedin = false
// console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Nikhil",
            lastname: "Kumar"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname) //'?' is optional chaining operator
const objec1 = {
    1: "a",
    2: "b"
}
const objec2 = {
    3: "c",
    4: "d"
}
// const obje3 = { ...objec1, ...objec2 };
const objec3 = Object.assign({}, objec1, objec2)
console.log(objec3);
const users = [
    {
        id: 1,
        email: "1@gmail.com"
    },
    {
        id: 1,
        email: "1@gmail.com"
    },
]
users[0].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("isLoggedin"))

