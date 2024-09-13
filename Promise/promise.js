const promiseOne = new Promise(function(resolve, reject){
    //DO AN ASYNC TASK
    //DB CALLS, CRYPTOGRAPHY, NETWORK
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000)
});

promiseOne.then(function(){
    console.log("Promise Consumed")
});




new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 1 Completed");
        resolve();
    }, 1000);
    
}).then(function(){
    console.log("Async 1 task is resolved")
});



const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: "chai", email:"chai@example.com"})
  }, 1000)
})
promiseThree.then(function(user){
    //resolve parameter name any consumption
console.log(user);
})
//{ username: 'chai', email: 'chai@example.com' }



const promiseFour = new Promise(function(resolve,reject){

    setTimeout(function(){
      let error = false;
      if(!error){
        resolve({username:"Rajesh" , love:"Broke"})
      }else{
        reject("Error Coming on the way")
      }
    }, 1000);
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("The Promise is either resolved or rejected")
)


//ASYNC AWAIT


const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "JavaScript", password:"123"})
        }else{
            reject('Error: Js went wrong')
        }
    }, 1000)
})
async function consumePromisefive(){
 try{
    const response = await promiseFive
    console.log(response);
 }catch(error){
    console.log(error)
 }
}
consumePromisefive();





/*
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()
*/


fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
.catch((error)=>
    console.log(error)
)
