//REST OPERATOR OR SPREAD OPERATOR
/*
function calculateCartPrice (...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));
// [ 200, 400, 500, 2000 ] THIS WILL RETURN ALL VALUES IN AN ARRAY
function calculateCartPrice (val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));
//[ 500, 2000 ] 
*/





//OBJECTS 
/*
const user = {
    username: "Rajesh",
    prices: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
// handleObject(user);
// Username is Rajesh and price is 199;
handleObject({
    username: "kashyap",
    prices: 399
})
//Username is kashyap and price is 399
*/


// ARRAY


const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
//400
console.log(returnSecondValue(
    [200, 600, 500]
))