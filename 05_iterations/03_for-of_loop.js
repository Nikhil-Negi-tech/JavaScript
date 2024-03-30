// for of 
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num)
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each character is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('UK', "United Kingdom")
map.set('JP', "Japan")
console.log(map)
for (const [key,value] of map) {
    console.log(`Key is ${key} and value is ${value}`)
}

const myObj = {
    'game1': 'NFS',
    'game2': 'FIFA',
    'game3': 'COD'
}
// for (const [key,value] of myObj) {
    // console.log(`Key is ${key} and value is ${value}`)
// }