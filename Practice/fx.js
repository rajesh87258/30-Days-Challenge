/*

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers
//it is just reference not execution 
addTwoNumbers();
// NaN

addTwoNumbers(4,5);
//9


const result = addTwoNumbers(4,5);
// 9
console.log("Result:", result);
// Result: undefined

function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result
    //WE DON'T GET ANYTHING AFTER RETURN STATEMENT
}
const result = addTwoNumbers(4,5);
console.log("Result:", result);
// Result: 9
*/
function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result
    return number1 + number2;
}
const result = addTwoNumbers(4,5);
// console.log("Result:", result);
// Result: 9



/*

function login(username){
    return `${username} just loggedIn`
}

// login("rajesh");
//NOTHING WILL Do Because we don't call them to return
console.log(login("rajesh"));
// rajesh just loggedIn
*/


/*
function login(username){
    if(username === undefined){
        console.log("Please Enter Your Username");
        return
    }
    return `${username} just loggedIn`
}
console.log(login("kashyap"));
// kashyap just loggedIn
console.log(login());
// Please Enter Your Username
// undefined
*/
function login(username = "RAJ"){
    // WE SET A DEFAULT VALUE FOR USER SO IT NEVER GOES TO IF a
    if(!username){
        console.log("Please Enter Your Username");
        return
    }
    return `${username} just loggedIn`
}
console.log(login());
// Please Enter Your Username
// undefined
console.log(login());
// RAJ just loggedIn