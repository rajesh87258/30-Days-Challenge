function multipleBy5 (num){
    return num*5
}

multipleBy5.power = 2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);


// 25
// 2
// {}

function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);   
}

const chai = new createUser("chai",25)
const tea = createUser("tea", 250)

// chai.printMe()
// console.log(chai);











 
// console.log(myName.trim().length);


let myHeroes = ["thor","RDJ"];

let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.rajesh = function(){
    console.log(`Rajesh is Present in all objects`)
}
// heroPower.rajesh()
// console.log(heroPower);
// Rajesh is Present in all objects

// myHeroes.rajesh()
// Rajesh is Present in all objects
//OBJECT HAVE POWER AND EVERYTHING IN JS IS OBJECT



//NOW WE GIVE THEM POWER ONLY TO ARRAY

Array.prototype.heyRajesh = function(){
    console.log(`Rajesh says hello`)
}

// myHeroes.heyRajesh();
// Rajesh says hello
// myHeroes.rajesh();
// Rajesh is Present in all objects

// heroPower.heyRajesh(); THIS WILL NOT WORK BECAUSE HEY RAJESH ONLY ADD TO THE ARRAY






//INHERITANCE

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS',
    fullTime : true
}

const User ={
    name :"chai",
    work: "google"
}
Teacher.__proto__ = User


Object.setPrototypeOf(TeachingSupport, Teacher);


let myName = "Rajesh    "

String.prototype.trueLength = function(){
  console.log(`${this}`);
//   console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
  

}
myName.trueLength()
// Rajesh    
// True length is: 6

"hotcoffee".trueLength()