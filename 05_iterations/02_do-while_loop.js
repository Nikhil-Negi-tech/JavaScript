//while: it is used to execute the block of code until the condition is true
let i = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`)
    index = index + 2
}
let myArray = ["flash", "batman", "superman"]
while (i<myArray.length) {
    const element = myArray[i];
    console.log(element)
    i++
}

// _______________________________________________
// do-while : it is used to execute the block of code at least once and then it will check the condition
let score = 11
do {
    console.log(`score is ${score}`)
    score++
} while (score <= 10)