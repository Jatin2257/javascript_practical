class ValidatorError extends Error{
    constructor(message){
        super(message);
        this.name = "Validation Error"
    }
}

function test(){
    throw new ValidatorError("Field Validation Error occurs")
}

try{
    test()
}catch(error){
    console.log(error.message);
    console.log(error.name);
}

class User{
    constructor(id,name,age){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    // get id(){
    //     return this.id;
    // }
    // set id(id){
    //     this.id = id;
    // }
    // get name(){
    //     return this.name;
    // }
    // set name(_name){
    //     this.name = _name;
    // }
    // get age(){
    //     return this.age;
    // }
    // set age(age){
    //     this.age = age;
    // }
}

const user = new User(123,"Jatin",22);

console.log(user);