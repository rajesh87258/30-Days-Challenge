//singleton
//object.create

//object literals
const mySym = Symbol("key1")
const JsUser = {
    name:"Rajesh",
    "full name" : "Rajesh kashyap",
    age: 18,
    [mySym]:"mykey1",
    location : "Ferozepur",
    email: "rajesh@gmail.com",
    isLoggedIn : false,
    lastLoginDays:["Monday", "Saturday"]

}
/*console.log(JsUser.name);
//Rajesh
console.log(JsUser["full name"]);
// Rajesh kashyap SQUARE NOTATION
console.log(JsUser[mySym]);
//mykey1
JsUser.email = "kashyap@gmail.com"
//kashyap@gmail.com EMAIL IS UPDATED
Object.freeze(JsUser);
//OBJECT IS FREEZED NOTHING WILL CHANGE AFTER FREEZE
JsUser.email = "rk@gmail.com"

console.log(JsUser)
*/

/*
{
  name: 'Rajesh',
  'full name': 'Rajesh kashyap',
  age: 18,
  location: 'Ferozepur',
  email: 'kashyap@gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}
*/ 
JsUser.greeting = function(){
    console.log("hello JS user")
}
console.log(JsUser.greeting());
//hello JS user
console.log(JsUser.greeting);
//[Function (anonymous)] FUNCTION REFERNCE ONLY NOT EXECUTED

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)
}
console.log(JsUser.greetingTwo());
//hello js user, Rajesh