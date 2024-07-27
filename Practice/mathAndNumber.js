/*
const score = 400;
console.log(score);
//400

const balance = new Number(100)
console.log(balance);
//Number:400

console.log(balance.toString().length);
//3

console.log(balance.toFixed(3));
//100.000

const otherNumber = 123.869;
console.log(otherNumber.toPrecision(4));
//123.9

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));
//1,00,00,000
*/
console.log(Math);
//Object [Math] {}

console.log(Math.abs(-4));
//4

console.log(Math.round(4.6));
//5

console.log(Math.ceil(4.2));
//5

console.log(Math.floor(4.9));
//4

console.log(Math.min(4, 3, 6, 8));
//3

console.log(Math.max(4, 3, 6, 8));
//8

console.log(Math.random())
//0 .... to ....1

console.log((Math.random()*10)+1);

console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min + 1))+min);