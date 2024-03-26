// Immediately Invoked Function Expression (IIFE)
// IIFE is a function that is executed immediately after it is created.

(function message(){
    console.log(`DB Connection Established`)
})
(); 
//()(); : this is the syntax for IIFE
// first() is the function and second() is the invocation of the function
// ';' : is necessary to prevent syntax error
// _______________________________________________________
// NOTE: IIFE is used to avoid global scope pollution.
//________________________________________________________

(
    (name) =>{
        console.log(`DB Connection Established with Arrow Function ${name}`)
    }
)('Nikhil')