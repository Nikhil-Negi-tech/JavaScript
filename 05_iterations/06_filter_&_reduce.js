const coding = ['Python', 'JavaScript', 'Java', 'C#', 'Ruby']

const values = coding.forEach((item)=>{
    // console.log(item)
    return item
})
console.log(values)

const myNum = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNum.filter((num)=>{
//    return num>4
// })
const newNums = myNum.filter((num)=>num>4)
console.log(newNums)

myNum.forEach((num)=>{
    if (num>4) {
        console.log(num)
    }
})

const books = [
    {
        title: 'Book1',
        genre: 'Fiction',
        published: 2000,
        edition: 1
    },
    {
        title: 'Book2',
        genre: 'Non-Fiction',
        published: 2001,
        edition: 2
    },
    {
        title: 'Book3',
        genre: 'Fiction',
        published: 2002,
        edition: 3
    },
    {
        title: 'Book4',
        genre: 'Non-Fiction',
        published: 2003,
        edition: 4
    },
    {
        title: 'Book5',
        genre: 'Fiction',
        published: 2004,
        edition: 5
    }
];

// const userBooks = books.filter((book) => book.genre === 'Fiction' )
const userBooks = books.filter((book) => book.published > 2002)
console.log(userBooks)