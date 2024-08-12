// const myArr = [0, 1, 2, 3, 4, 5];
// const myn1 = myArr.slice(1, 3);
// console.log(myn1);
// // 1 2
// console.log(myArr)
// [ 1, 2 ]
// [ 0, 1, 2, 3, 4, 5 ]





// const myPriya = [0, 1, 2, 3,  4, 5]
// const priya = myPriya.splice(1, 3);
// console.log(priya);
// // 1 2 3
// console.log(myPriya)

// [ 1, 2, 3 ]
// [ 0, 4, 5 ]

// const marvel_heroes = ["ironman"," captainamerica", "thor"];
// const dc_heroes = ["batman", "superman", "flash"];
// const priya = ["motu", "patlu", "moonshine"]

// const all_heroes = dc_heroes.concat(priya);
// console.log(all_heroes);



// const heroes = [...dc_heroes, ...marvel_heroes, ...priya]
// console.log(heroes);

[]

// console.log(Array.isArray("Rajesh"));

// console.log(Array.isArray(["Rajesh"]))





// const sc = 3;
// const obc = 2;
// const bc = 1;
// console.log(Array.of(sc, obc, bc));


// const arr = new Array(3);
// console.log(arr); 
// const arr1 = new Array(3, 2, 1);
// console.log(arr1); 






const big_array = [1, 2, 3, [4, 5], 6, [7, 8, [9,10] ]];
const big = big_array.flat(2);
const big2 = big_array.flat(Infinity);


console.log(big);
