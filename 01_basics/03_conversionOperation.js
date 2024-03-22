// let score = "33" - {string, number, 33}
// let score = "33abc" - {string, number, NAN}
// let score = null - {object, number, 0}
// let score = undefined - {undefined, number, NAN}
// let score = true - {boolean, number, 1}
// let score = "nikhil" - {string, number, NAN}
// console.log(typeof score) 
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber) 
// console.log(valueInNumber) 

// for Boolean() conversion operation
    //1 => true; 0 => false
    //"" => false; " " => true

// ************************************************** Operations **************************************************
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1= "Hello"
let str2 = " Nikhil"
let str3 = str1 + str2
// console.log(str3); // Hello Nikhil

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log(+true);
// console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
