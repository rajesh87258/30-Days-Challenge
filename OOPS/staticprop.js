class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
const rajesh = new User("Rajesh")
rajesh.logMe();
console.log(rajesh.createId());