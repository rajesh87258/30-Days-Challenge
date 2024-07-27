let myDate = new Date()
/*
console.log(myDate);
// 2024-07-27T05:09:53.610Z

console.log(myDate.toString());
// Sat Jul 27 2024 10:41:04 GMT+0530 (India Standard Time)

console.log(myDate.toJSON());
// 2024-07-27T05:12:10.030Z

console.log(myDate.toDateString());
// Sat Jul 27 2024
console.log(myDate.toLocaleDateString());
// 7/27/2024

let myCreatedDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate.toLocaleString());
// 1/23/2023, 5:03:00 AM

let myCreatedDate = new Date("2023-01-14");

let myCreatedDate = new Date("01-14-2023");
// 1/14/2023, 12:00:00 AM
console.log(myCreatedDate.toLocaleString());
*/

/*
let myTimeStamp = Date.now()
let myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate.getTime());
// 1673634600000 millisecond
console.log(myTimeStamp);
// 1722057740996
console.log(Math.floor(Date.now()/1000));
// 1722057872 second
*/

/*
let newDate = new Date()
console.log(newDate);
// 2024-07-27T05:26:49.481Z
console.log(newDate.getMonth()+1);
//7
console.log(newDate.getDay());
//6
*/
let newDate = new Date()

// console.log(`${newDate.getDate()} and Time is ${newDate.getTime()}`);
//27 and Time is 1722058265754
newDate.toLocaleString('default',{
    weekday:"long"
})