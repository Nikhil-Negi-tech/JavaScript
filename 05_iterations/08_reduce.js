const myNums = [1, 2, 3, 4, 5];

// const total = myNums.reduce = myNums.reduce(function(acc,currVal){
//     console.log(`acc: ${acc}, currVal: ${currVal}`)
//     return acc + currVal;
// },0)
const total = myNums.reduce((acc,curr)=>acc+curr,0)
console.log(total)

const shoppingCart = [
    {
        product: 'phone',
        price: 699
    },
    {
        product: 'Screen Protector',
        price: 9.98
    },
    {
        product: 'Memory Card',
        price: 20.99
    },
    {
        product: 'Case',
        price: 24.99
    }
]
const totalPrice = shoppingCart.reduce((acc,curr)=>acc+curr.price,0)
console.log(totalPrice)