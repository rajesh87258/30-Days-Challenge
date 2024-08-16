const myNums = [1, 2, 3]

// const myNumbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < myNumbers.length; i++) {
//   console.log(myNumbers[i+i]); // Output: 2, 4, 6, 8, 10
// }
/*


const myTotal = myNums.reduce( function (acc, curval){
    console.log(`acc: ${acc} and currval: ${curval} `);
    return acc + curval 
}, 0)
console.log(myTotal)

// acc: 0 and currval: 1 
// acc: 1 and currval: 2 
// acc: 3 and currval: 3
// 6
*/
//IN ARROW

const myTotal = myNums.reduce( (acc, curval)=> acc + curval, 0)
// console.log(myTotal)
6




const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "AI course",
        price : 9999
    }, {
        itemName : "py course",
        price : 7999
    }, {
        itemName : "mobile dev course",
        price : 12999
    }

]

const totalShopping = shoppingCart.reduce((acc, item) => acc+ item.price ,0)
console.log(totalShopping);
//33996