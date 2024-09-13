class User{
    constructor(username, password, email){
    this.username = username;
    this.password = password;
    this.email = email;
}
encryptPassword(){
   return `${this.password}abc`
}
changeUsername(){
   return `${this.username.toUpperCase()}`
}
}

const chai = new User("Rajesh", "1234", "raj@gmail.com")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// BEHIND THE SCENE

// function User(username, email, password){
//     this.username = username;
//     this.password = password;
//     this.email = email;
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }
// const Tea = new User("Rajesh", "1234", "raj@gmail.com")

// console.log(Tea.encryptPassword());
// console.log(Tea.changeUsername());