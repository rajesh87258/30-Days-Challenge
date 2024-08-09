// IMMEDIATELY INVOKED FUNCTION EXPRESSION
/* NAMED IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();
// DB CONNECTED SEMI-COLON IS PLAY VERY CRUCIAL ROLE IF YOU WANT TO START NEW IIFE FX AFTER THAT

( ()=> {
    console.log(`DB CONNECTED TWO`);
})()
// DB CONNECTED TWO
*/

((name) => {
    console.log(`DB CONNECT TO ${name}`);
})('rajesh');
// DB CONNECT TO rajesh