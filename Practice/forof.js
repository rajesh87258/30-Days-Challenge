/*
for of 

["", "", ""]
[{}, {}, {}]
const arr = [1, 2, 3, 4, 5]
for (const num of arr){
    // console.log(num);
}

// 1
// 2
// 3
// 4
// 5 



const greetings = "Hello world!";
for(const greet of greetings){
    if(greet == " "){
        // console.log(`Space is founded${greet}`)
        continue
    }
    // console.log(`Each Char is ${greet}`)
}
// Each Char is H
// Each Char is e
// Each Char is l
// Each Char is l
// Each Char is o
// Each Char is w
// Each Char is o
// Each Char is r
// Each Char is l
// Each Char is d
// Each Char is !


const map = new Map()
map.set('IN', "India")
map.set('USA'," United State of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map)

// {
//     'IN' => 'India',
//     'USA' => ' United State of America',
//     'Fr' => 'France'
//   }

for (const key of map) {
    console.log(key)
    
}
// [ 'IN', 'India' ]
// [ 'USA', ' United State of America' ]
// [ 'Fr', 'France' ]

for (const [key, value] of map) {
        console.log(key, ':-', value);
        
    }

//     IN :- India
// USA :-  United State of America
// Fr :- France
*/




const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject){
    console.log(key, ':-', value);
    
}
//IT WILL NOT WORK OBJECT IS NOT ITERABLE