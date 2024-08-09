/*
//slice , splice
const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr);
// [ 0, 1, 2, 3, 4, 5 ]

console.log("A", myArr);
// A [ 0, 1, 2, 3, 4, 5 ]


const myn1 = myArr.slice(1, 3);
console.log(myn1);
// [ 1, 2 ]

console.log("B", myArr);
// B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3);
//Original Array manipulate in splice
console.log(myn2);
[ 1, 2, 3 ]
console.log("C", myArr);
C [ 0, 4, 5 ]
*/
/*
const marvel_heroes = ["ironman"," captainamerica", "thor"];
const dc_heroes = ["batman", "superman", "flash"];
const heroes = marvel_heroes.concat(dc_heroes);
//[ 'ironman', ' captainamerica', 'thor', 'batman', 'superman', 'flash' ]
console.log(heroes);

const all_heroes = [...marvel_heroes, ...dc_heroes];
//[ 'ironman', ' captainamerica', 'thor', 'batman', 'superman', 'flash' ]
//Easily assign more than 2 arrays in Spread operator
console.log(all_heroes);
*/
/*
console.log(Array.isArray("Rajesh"));
//false


console.log(Array.from("Rajesh"));
//[ 'R', 'a', 'j', 'e', 's', 'h' ]

console.log(Array.from({name:"Rajesh"}));
//[]

const sc = 3;
const obc = 2;
const bc = 1;
console.log(Array.of(sc, obc, bc));
//[ 3, 2, 1 ]
*/
const big_array = [1, 2, 3, [4, 5], 6, [7, 8, [9,10] ]];
const big = big_array.flat(Infinity);
const big2 = big_array.flat(2);

console.log(big);
console.log(big2);