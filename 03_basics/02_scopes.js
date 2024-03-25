
let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("Inner:" , a)// this is local scope
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

console.log(a) // this is global scope
// console.log(b)
