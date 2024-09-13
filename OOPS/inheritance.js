class User{
    constructor(username){
     this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
// the Teacher class inherits from User, meaning that Teacher can use the properties and methods of User.
class Teacher extends User {
    constructor(username,password,email){
        super(username);
        this.password = password;
        this.email = email; 
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`)  
    }
}
const chai = new Teacher("Chai","chai@teacher.com","124");
chai.addCourse();
const masalaChai = new User("masalaChai");
masalaChai.logMe();
//A new course is added by Chai
// USERNAME is masalaChai

console.log(chai instanceof Teacher);
