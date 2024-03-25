//GLOBAL AND LOCAL SCOPE
let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log("Inner:" , a)// this is local scope
}
// console.log(a) // this is global scope
// console.log(b)


function one(){
    const username = "Nikhil"
    function two(){
        const website = "www.google.com"
        console.log(username) // this will work
    }
    // console.log(website)// this will give error because website is not defined in this scope
    two()
}
// one()
if(true){
    const username = "Nikhil"
    if(username === "Nikhil"){
        const website = "www.google.com"
        // console.log(username + " " + website) // this will work
    }
    // console.log(website) // this will give error because website is not defined in this scope
}
// console.log(username) // this will give error because username is not defined in this scope

//++++++++++++++++++++++++++++++++++++++++++++ intersting +++++++++++++++++++++++++++++++++++++++
// Function hoisting
console.log(addone(5)) // this will work beacuse function is hoisted
function addone(num){ // function is defined here
    return num + 1
}

console.log(addTwo(5)) // this will give error because function is not hoisted
const addTwo = function(num){ // function is defined and assigned to variable here
    return num + 2
}
