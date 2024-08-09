/*
const user = {
    username : "rajesh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`
            //rajesh, welcome to website
        );
    }
}
 
user.welcomeMessage()
user.username = "sam";
user.welcomeMessage();
//rajesh, welcome to website
//sam, welcome to website
*/

/*

const user = {
    username : "rajesh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
 
user.welcomeMessage()
user.username = "sam";
user.welcomeMessage();
//
rajesh, welcome to website
  username: 'rajesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
sam, welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
  

const user = {
    username : "rajesh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
 
// user.welcomeMessage()
// user.username = "sam";
// user.welcomeMessage();
console.log(this);
//{}

*/











/*
function chai(){
    console.log(this);
}
chai();
// SO MUCH THINGS WILL BE PRINTED IN CONSOLE
*/

/*
function chai(){
    let username = "rajesh"
    console.log(this.username);
}
chai();
//undefined
*/


/*
const chai = function (){
    let username = "rajesh"
    console.log(this.username);
}
chai();
//undefined


const chai = () => {
    let username = "rajesh"
    console.log(this.username);
}
chai();
//undefined
*/


/*
//EXPLICIT FUNCTION BECAUSE WHEN WE USE {} BRACKETS WE HAVE TO GIVE THEM RETURN STATEMENT
const addTwo = (num1, num2) => {
return num1 + num2;
}
// 7



// const addTwo = (num1, num2) => num1 + num2


//IMPLICIT FUNCTION BECAUSE WHEN WE USE () BRACKETS WE HAVE TO GIVE THEM RETURN STATEMENT
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4));
//7
*/

// WHEN YOU ARE TRYING TO RETURN OBJECT IN ARROW FX
const addTwo = (num1, num2) => ({name : "rajesh"})
console.log(addTwo(3, 4));
// { name: 'rajesh' }