/*const tinderUser = new Object();
// SINGLE TONE OBJECT
console.log(tinderUser);
//{}
/*
*/
const tinderUser = {}
// NON SINGLE TON OBJECT
// console.log(tinderUser);
//{}

tinderUser.id = "123r"
tinderUser.name = "Raj"
tinderUser.loggedIn = false
// console.log(tinderUser);
//{ id: '123r', name: 'Raj', loggedIn: false }

const regularUser = {
    email: "raj@gmail.com",
    fullName : {
         userfullname : {
            name : "Rajesh",
            sirname: "kashyap"
         }
    }
}
//console.log(regularUser);
/*
{
  email: 'raj@gmail.com',
  fullName: { userfullname: { name: 'Rajesh', sirname: 'kashyap' } }
}
  */

// console.log(regularUser.fullName.userfullname);
// { name: 'Rajesh', sirname: 'kashyap' }



//MERGE OBJECT 
const obj1= {
    1:"a",
    2:"b"
}
const obj2= {
    3:"c",
    4:"d"
}
/*
const obj3 = { obj1, obj2}
console.log(obj3);
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
*/
/*
const obj3 = Object.assign({}, obj1, obj2);
// if I didn't give them bracket{} than it will go to obj1 
console.log(obj3);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

*/
const obj3 = {...obj1, ...obj2}
// console.log(obj3);



const users = [
    {
        id : 1,
        email:"raj",
    }
    ,{
        name : "box",
    },{

    }
]

// console.log(users[1].name);
//box
/*
console.log(Object.keys(tinderUser));
//[ 'id', 'name', 'loggedIn' ]
console.log(Object.values(tinderUser));
//[ '123r', 'Raj', false ]
console.log(Object.entries(tinderUser));
//[ [ 'id', '123r' ], [ 'name', 'Raj' ], [ 'loggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('loggedIn'));
//true
*/


//DESTRUCTURE 
// const course = {
//     courseName : " apna sapna",
//     price : "999",
//     courseInstructor : "rajesh"
// }
// course.courseInstructor = "rajesh kashyap";
// console.log(course.courseInstructor);
// rajesh kashyap

/*
const {courseInstructor}= course;
console.log(courseInstructor);
// rajesh
*/
const {courseInstructor : teacher}= course;
console.log(teacher);
// rajesh