const coding = ['Python', 'JavaScript', 'Java', 'C#', 'Ruby']
// coding.forEach(function (val){
//     console.log(val)
// })
// coding.forEach((val)=>{
//     console.log(val)
// })

// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme)

// coding.forEach((val,index,arr)=>{
//     console.log(val,index,arr)
// })

const myCoding = [
    {
        name: 'Python',
        type: 'Interpreted'
    }, 
    {
        name: 'JavaScript',
        type: 'Interpreted'
    }, 
    {
        name: 'Java',
        type: 'Compiled'
    }, 
    {
        name: 'C#',
        type: 'Compiled'
    }, 
    {
        name: 'Ruby',
        type: 'Interpreted'
    }
]
myCoding.forEach((val)=>{
    console.log(`Name is ${val.name} and type is ${val.type}`)
})