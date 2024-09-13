const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(descriptor);

// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,       
//   configurable: false      
// }

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
    name:"ginger",
    price:250,
    isAvailable:true
}

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name',{
    writable: false,
    enumerable: false
})
//you can USE TO STOP ITERATE OVER OBJECT
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for (let[key,value] of Object.entries(chai)) {
    console.log(`${key},${value}`);
    
}
// name,ginger
// price,250
// isAvailable,true

// const tea = {
//     name:"ginger",
//     price:250,
//     isAvailable:true,
//     func: function(){
//         console.log("hy")
//     }
// }
// for (let [key,value] of Object.entries(tea)) {
//     if(typeof value !== 'function'){
//         console.log(`${key}:${value}`)
//     }
    
// }