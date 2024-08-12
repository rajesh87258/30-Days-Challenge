/*
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(i);
}
// Ctrl + Shift + L
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9






for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is best number")
    }
    console.log(i);
}
//0
// 1
// 2
// 3
// 4
// 5 is best number
// 5
// 6
// 7
// 8
// 9
// 10



for( i=0; i<=10; i++){
    console.log(`Outer loop value: ${i}`)
    for(j=0; j<=10; j++){
        console.log(`Inner value ${j} and inner loop ${i}`)

    }
}
// Outer loop value: 0
// Inner value 0 and inner loop 0
// Inner value 1 and inner loop 0
// Inner value 2 and inner loop 0
// Inner value 3 and inner loop 0
// Inner value 4 and inner loop 0
// Inner value 5 and inner loop 0
// Inner value 6 and inner loop 0
// Inner value 7 and inner loop 0
// Inner value 8 and inner loop 0
// Inner value 9 and inner loop 0
// Inner value 10 and inner loop 0 
//SAME REPEATING




for(i=1; i<=10; i++){
    console.log(`Outer loop value: ${i}`)
    for(j=1; j<=10; j++){
        console.log(i + '*' +  j  + '=' +  i*j);
    }
}
// TABLE WILL BE PRINTED 1 TO 10



let myArray = ["flash", "batman", "ironman"]
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray.length);
    const element = myArray[index];
    console.log(element)
}
// 3
// flash
// 3
// batman
// 3
// ironman




for(i=1; i<=6; i++){
    if(i == 5){
        console.log(`${i} IS DETECTED`)
        break;
    }
    console.log(`value of i is ${i}`)
}

// value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// 5 IS DETECTED

*/

for(i=1; i<=6; i++){
    if(i == 3){
        console.log(`${i} IS DETECTED`)
        continue;
    }
    console.log(`value of i is ${i}`)
}
// value of i is 1
// value of i is 2
// 3 IS DETECTED
// value of i is 4
// value of i is 5
// value of i is 6