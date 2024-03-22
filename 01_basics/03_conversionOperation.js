// let score = "33" - {string, number, 33}
// let score = "33abc" - {string, number, NAN}
// let score = null - {object, number, 0}
// let score = undefined - {undefined, number, NAN}
// let score = true - {boolean, number, 1}
// let score = "nikhil" - {string, number, NAN}
console.log(typeof score) 
let valueInNumber = Number(score)
console.log(typeof valueInNumber) 
console.log(valueInNumber) 

// for Boolean() conversion operation
    //1 => true; 0 => false
    //"" => false; " " => true
