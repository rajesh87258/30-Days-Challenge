function SetUsername(username){
    //COMPLEX DB CALLS 
    this.username = username;
    console.log("Called")
}

function createUser(username, email, password){
    SetUsername.call(this, username)
//CALL WILL HELP TO HOLD THE REFERENCE BECAUSE AFTER CALLING SETUSERNAME FUNCTION IT WILL EXCUTE  AND ALSO DELETE THE PROPERTIES

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

//The call method in JavaScript is a function method that allows you to invoke (or call) a function with a specific this value and individual arguments. This is particularly useful when you want to borrow a method from one object and use it on another object.