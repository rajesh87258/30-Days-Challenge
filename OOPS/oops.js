// const user = {
//     username : "Rajesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails : function(){
//         // console.log("Got User details from database");
//        console.log(`Username: ${this.username}`);
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());

// Rajesh
// Got User details from database
// undefined


// const user = {
//     username : "Rajesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails : function(){
//         // console.log("Got User details from database");
//        console.log(`Username: ${this.username}`);
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());

// Rajesh
// Username: Rajesh
// undefined 

// const user = {
//     username : "Rajesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails : function(){
//        console.log(this);
//     }
// }
// console.log(user.username);
// // console.log(user.getUserDetails());
// console.log(this)

//Rajesh
// {
//     username: 'Rajesh',
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: [Function: getUserDetails]
//   }
//   undefined

//{}



//CONSTRUCTOR

//WHEN WE USE NEW KEYWORD NEW OBJECT WILL CREATE. CONSTRUCTION FX WILL CALLED WITH NEW KEYWORD. this keyword help to add.
// Creates a new empty object.
// Sets the value of this in the constructor function to point to this new object.
// Executes the constructor function code with this referring to the new object.
// Automatically returns the new object.

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn


    this.greeting = function (){
        console.log(`welcome ${this.username}`);
    }
        // return this

}

// const userOne = new User("rajesh", 12, true)
// const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne);
// console.log(userTwo);


//User { username: 'rajesh', loginCount: 12, isLoggedIn: true }
// User { username: 'ChaiAurCode', loginCount: 11, isLoggedIn: false }

// User {
//     username: 'rajesh',
//     loginCount: 12,
//     isLoggedIn: true,
//     greeting: [Function (anonymous)]
//   }
//   User {
//     username: 'ChaiAurCode',
//     loginCount: 11,
//     isLoggedIn: false,
//     greeting: [Function (anonymous)]
//   }



const userOne = new User("rajesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
  