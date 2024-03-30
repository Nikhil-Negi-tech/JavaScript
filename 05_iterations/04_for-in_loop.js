const myObj = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    java: 'Java',
    swift: 'Swift by Apple' 
}
for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`)
}
const myArr = [1, 2, 3, 4, 5]
for (const key in myArr) {
    // console.log(myArr[key])
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('UK', "United Kingdom")
// map.set('JP', "Japan")
// for (const [key,value] in map) {
//     console.log(`Key is ${key} and value is ${value}`)
// }