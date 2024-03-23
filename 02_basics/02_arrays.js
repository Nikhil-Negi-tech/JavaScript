const marvel_heroes = ["thor", "Ironman", "Hulk", "Captain America", "Black Widow", "Hawkeye"];
const dc_heroes = ["Superman", "Batman", "flash", "Wonder"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[6][2]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)

const all_new_heroes = [...marvel_heroes, ...dc_heroes] //'spread operator' to merge two arrays
console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) //'flat' method to flatten the array to a single level array
console.log(real_another_array);

console.log(Array.isArray("Nikhil")) //false
console.log(Array.from("Nikhil")) //['N','i','k','h','i','l']
console.log(Array.from({name: "Nikhil"})) //[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [100, 200, 300]