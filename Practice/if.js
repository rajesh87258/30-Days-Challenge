//  IF 
/*
const isUserLoggedIn = true
if(isUserLoggedIn){
    console.log("login")
}else{
    console.log("reject")
}
// login




// <, >, <=, >=, ==, !=, ===
if(2 === "2"){
    console.log("equal");
}
else{
    console.log("not equal")
}
//not equal


console.log(5 !== '5'); // true, because the types are different (number vs string)
console.log(true !== 1); // true, because the types are different (boolean vs number)
console.log(5 !== 5); // false, because both the value and type are the same




const score = 200;
if(score>100){
    const power = "ironman"
    console.log(`I''m the ${power} `)
}
console.log(`I''m the ${power} `)
//ReferenceError: power is not defined





const balance = 1000;
// if(balance>500) console.log("test"), console.log("test2");
// test
// test2
if (balance < 500){
    console.log("less than 500");
} else if(balance < 750){
    console.log("less than 750");
} else{
    console.log("less than 1200")
}
//less than 1200
*/

const isUserLoggedIn = true;
const debitCard = true;

// if( isUserLoggedIn && debitCard){
//     console.log("Allow to buy course")
// }
// Allow to buy course


if( isUserLoggedIn && debitCard && 2 == 4){
        console.log("Allow to buy course")
    }
//NOTHING WILL PRINT BECAUSE STATEMENT IS FALSE


const loggedInFromGoogle = false
const loggedInFromEmail = true;
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In")
}
//User Logged In 
//IF ONLY ONE STATEMENT IS TRUE THAN IT WILL BE LOG GED IN 