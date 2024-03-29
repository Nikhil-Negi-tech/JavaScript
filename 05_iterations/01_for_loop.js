// for loop
for (let i = 0; i < 10; i++) { //loop that iterates from 0 to 9 and logs each element to the console.
    const element = i;
    if(element == 5){
        // console.log("5 is best number")
    }
    // console.log(element);
}
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop value: ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop value: ${j} and Outer Loop value: ${i}`)
        // console.log(i + ` * ` + j + ` = ` + i*j)
    }
}
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length)
for (let i = 0; i < myArray.length; i) {
    const element = myArray[i];
    // console.log(element)
}
// _______________________________________________
// break statement : it is used to break the loop when a certain condition is met
for (let i = 0; i <= 20; i++) {
    if( i == 5 ){
        console.log("5 is detected")
        break;
    }
    console.log(`Value of i is ${i}`)
}
// _______________________________________________
// continue statement : it is used to skip the current iteration of the loop and continue with the next iteration
for (let i = 0; i <= 10; i++) {
    if( i == 5 ){
        console.log("5 is detected")
        continue;
    }
    console.log(`Value of i is ${i}`)
}
// _______________________________________________
