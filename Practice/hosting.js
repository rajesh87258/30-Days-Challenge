/*
function one(){
    const username = "rajesh"
    function two(){
        const website = "tiktok";
        console.log(username);

    }
    // console.log(website);
    // ReferenceError: website is not defined BECAUSE CHILD TAKE VARIABLE FROM PARENT BUT PARENT FX CANT
    two();
  // NOTHING WILL WORK IF 2 IS NOT EXECUTED
}
one();

//rajesh
*/



if(true){
    const username = "rajesh";
    if(username === "rajesh"){
        const website = "youtube";
        // console.log(username + website)
        // rajeshyoutube
    }
    // console.log(website);
    //ReferenceError: website is not defined
}
// console.log(username);
//ReferenceError: username is not defined



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addOne(5));
//THIS WILL WORK 6
function addOne(num){
    return num +1
}

addTwo(5);
//ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num){
    return num + 2
}
