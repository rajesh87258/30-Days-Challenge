// // // // const myArr = [0, 1, 2, 3, 4, 5];
// // // // const myn1 = myArr.slice(1, 3);
// // // // console.log(myn1);
// // // // // 1 2
// // // // console.log(myArr)
// // // // [ 1, 2 ]
// // // // [ 0, 1, 2, 3, 4, 5 ]





// // // // const myPriya = [0, 1, 2, 3,  4, 5]
// // // // const priya = myPriya.splice(1, 3);
// // // // console.log(priya);
// // // // // 1 2 3
// // // // console.log(myPriya)

// // // // [ 1, 2, 3 ]
// // // // [ 0, 4, 5 ]

// // // // const marvel_heroes = ["ironman"," captainamerica", "thor"];
// // // // const dc_heroes = ["batman", "superman", "flash"];
// // // // const priya = ["motu", "patlu", "moonshine"]

// // // // const all_heroes = dc_heroes.concat(priya);
// // // // console.log(all_heroes);



// // // // const heroes = [...dc_heroes, ...marvel_heroes, ...priya]
// // // // console.log(heroes);

// // // []

// // // // console.log(Array.isArray("Rajesh"));

// // // // console.log(Array.isArray(["Rajesh"]))





// // // // const sc = 3;
// // // // const obc = 2;
// // // // const bc = 1;
// // // // console.log(Array.of(sc, obc, bc));


// // // // const arr = new Array(3);
// // // // console.log(arr); 
// // // // const arr1 = new Array(3, 2, 1);
// // // // console.log(arr1); 





// // // // const big_array = [1, 2, 3, [4, 5], 6, [7, 8, [9,10] ]];
// // // // const big = big_array.flat(2);
// // // // const big2 = big_array.flat(Infinity);


// // // // console.log(big);

// // // // let x = 5;
// // // // let y = x;
// // // // x++;
// // // // console.log(x, y);

// // // const mySym = Symbol("key1")

// // // const JsUser = {
// // //     name:"Rajesh",
// // //     "full name" : "Rajesh kashyap",
// // //     age: 18,
// // //     [mySym]:"mykey1",
// // //     location : "Ferozepur",
// // //     email: "rajesh@gmail.com",
// // //     isLoggedIn : false,
// // //     lastLoginDays:["Monday", "Saturday"]

// // // }
// // // // console.log(JsUser);
// // // // //mykey1
// // // // console.log(JsUser[mySym])

// // // // {
// // // //     name: 'Rajesh',
// // // //     'full name': 'Rajesh kashyap',
// // // //     age: 18,
// // // //     location: 'Ferozepur',
// // // //     email: 'rajesh@gmail.com',
// // // //     isLoggedIn: false,
// // // //     lastLoginDays: [ 'Monday', 'Saturday' ],
// // // //     [Symbol(key1)]: 'mykey1'
// // // //   }
// // // console.log(Object.values(JsUser));

// // // const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// // // const priya = myArr.slice(2, 4)
// // // console.log(priya);

// // const mySym = Symbol("key1")
// // const JsUser = {
// //     name:"Rajesh",
// //     "full name" : "Rajesh kashyap",
// //     age: 18,
// //     [mySym]:"mykey1",
// //     location : "Ferozepur",
// //     email: "rajesh@gmail.com",
// //     isLoggedIn : false,
// //     lastLoginDays:["Monday", "Saturday"]

// // }

// // JsUser.priyaKashyap = function(){
// //     console.log(`hy my love : ${this.name}`); 
// // }
// // console.log(JsUser.priyaKashyap());

// // const tinderUser = {};
// // tinderUser.id = "123r"
// // tinderUser.name = "Raj"
// // tinderUser.loggedIn = false;

// // // console.log(tinderUser);

// // const regularUser = {
// //     email: "raj@gmail.com",
// //     fullName : {
// //          userfullname : {
// //             name : "Rajesh",
// //             sirname: "kashyap"
// //          }
// //     }
// // }

// // console.log(regularUser.fullName.userfullname.name);

// // const obj1= {
// //     1:"a",
// //     2:"b"
// // }
// // const obj2= {
// //     3:"c",
// //     4:"d"
// // }
// // const obj3 = {...obj1, ...obj2}
// // console.log(obj3)

// // const users = [
// //     {
// //         id : 1,
// //         email:"raj",
// //     }
// //     ,{
// //         name : "box",
// //     },{

// //     }
// // ]

// // const tinderUser = {};
// // tinderUser.id = "123r"
// // tinderUser.name = "Raj"
// // tinderUser.loggedIn = false;

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));
// // console.log(tinderUser.hasOwnProperty('isloggedIn'))

// // const course = {
// //     courseName : " apna sapna",
// //     price : "999",
// //     courseInstructor : "rajesh"
// // }
// // const{courseInstructor} = course;
// // console.log(courseInstructor);


// // 



// // function addTwoNumbers(number1, number2){
    
// //     console.log(number1 + number2);
// // }
// // const result = addTwoNumbers(4,5);
// // console.log("Result:", result);

// // function addTwoNumbers(number1, number2){
// //     let result = number1 + number2;
// //     return result
// //     //WE DON'T GET ANYTHING AFTER RETURN STATEMENT
// // }
// // const result = addTwoNumbers(4,5);
// // console.log("Result:", result);
// // // Result: 9





// // function login(username){
// //     return `${username} just loggedIn`
// // }

// // console.log(login("rajesh"));

// // function login(username){
// //     if(username === undefined){
// //         console.log("Please Enter Your Username");
// //         return
// //     }
// //     return `${username} just loggedIn`
// // }
// // console.log(login());
// // function login (username = "Raj"){
// //     if (!username) {
// //         return
// //         console.log("Please enter your user name");
        

        
        
// //     } else {
// //         return `${username} logged in`
// //     }
// // }
// // console.log(login());

// // function calculateCartPrice (...num1){
// //     return num1
// // }
// // console.log(calculateCartPrice(200, 400, 500, 2000));

// // function spread (num2){
// //     return num2 =[1,2,3,4] 
// // }
// // console.log(...num2);

// function calculateCartPrice (val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000));

// const numbers = [200, 400, 500, 2000];
// console.log(...numbers); 

// const obj3 = { obj1, obj2}
// console.log(obj3);
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({}, obj1, obj2);
// // if I didn't give them bracket{} than it will go to obj1 
// console.log(obj3);
// //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj1={}

const obj3 = {...obj1, ...obj2}
// console.log(obj3);