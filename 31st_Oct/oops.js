// OOPS in Javascript

// it's prototype based not class based like java or c++;


// Factory Function
// A factory function creates and returns an object

// function createUser(name, age) {
//   return {
//     name,
//     age,
//     greet() {
//       console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
//     }
//   };
// }

// const user1 = createUser("Vedant", 23);
// user1.greet(); // Hi, I'm Vedant and I'm 23 years old.

// Constructor Function

// function User(name, age){
//     this.name = name,
//     this.age = age,
//     this.greet = function (){
//         console.log(`name ${this.name} and age ${age}`)
//     }
// }

// const user1 = new User("vedant", 22)
// const user2 = new User("roman", 44)
// user1.greet()
// user2.greet()


// Prototypes  
// function User(name){
//     this.name = name;
// } 

// User.prototype.sayHello = function(){
//     console.log(`name is ${this.name}`)
// }

// const user = new User("vedant")
// user.sayHello()


// ES6 Classes
// Classes are syntactic sugar over prototypes -- they make code cleaner and easier to read

// class User{
//     constructor(name, age){
//         this.name = name;
//         this.age = age
//     }

//     greet(){
//         console.log(`Name is ${this.name} and age is ${this.age}`)
//     }
// }

// const user = new User("vedant", 21);
// user.greet()


// Encapsulation 
// hiding implementations details and exposing only what's needed.

// class BankAccount{
//     #balance = 0 //private variable

//     deposit(amount){
//         this.#balance += amount;
//         console.log(`amount added ${amount}`)
//     }

//     getBalance(){
//         return this.#balance
//     }
// }

// const user = new BankAccount()
// user.deposit(1000)
// user.deposit(200)
// console.log(user.getBalance())


// Inheritance
// Inheritance lets one class use properties of another

// class Person{
//     constructor(name){
//         this.name = name
//     };

//     greet(){
//         console.log(`Hello ${this.name}`)
//     }
// }

// class Student extends Person{
//     constructor(name, course){
//         super(name)
//         this.course = course
//     };

//     getDetails(){
//         console.log(`Name is ${this.name} and course is ${this.course}`)
//     }
// }

// const user = new Student("vedant", "chemistry")
// user.greet()
// user.getDetails()


// Polymorphism
// same method name, different behaviour (depending on which class is using it.)

// class Animal{
//     speak(){
//         console.log("animal")
//     }
// }

// class Dog extends Animal{
//     speak(){
//         console.log("dog")
//     }
// }

// class Cat extends Animal{
//     speak(){
//         console.log("cat")
//     }
// }

// const dog = new Dog();
// dog.speak()


// Abstraction 
// show only what's necessary and hide the rest.
// example: exposing public methods and hiding private logic.
// Abstraction helps keep APIs clean and secure.

// class API {
//     #token = "fdr59oijhbhgfd"

//     fetchData(){
//         console.log("Fetching dataa.....")
//         this.#authenticate();
//     }

//     #authenticate(){
//         console.log("Authenticating internally...");
//   }
// }

// const api = new API();
// api.fetchData()

// Static Methods !!
// Use static methods for utilities that don’t depend on instance data.

// class MathUtil{
//     static add(a,b){
//         return a + b;
//     }
// };

// console.log(MathUtil.add(2,3))

// Getters and Setters
// They control access to properties (like computed properties).

// class User {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name.toUpperCase();
//   }

//   set name(value) {
//     if (value.length < 3) throw new Error("Name too short!");
//     this._name = value;
//   }
// }

// const user = new User("Vedant");
// console.log(user.name); // VEDANT
// user.name = "Aryan";
// console.log(user.name); // ARYAN


// Project using OOPs Concept
// User Manager System

// Tasks :
// 1) Create a User class
// 2) Add Encapsulation
// 3) Add a Static Counter
// 4) Create an Admin class that extends User
// 5) Implement polymorphism

class User{
    #email = null;
    static userCount = 0;

    static getUserCount(){
        console.log(this.userCount);
    }
    constructor(name, email){
        this.name = name
        this.#email = email
        User.userCount++;
    }
    static getUserCount() {
         console.log(`Total users: ${this.userCount}`);
    }

    login(){
        console.log(`User ${this.name} logged in.`)
    }

    logout(){
        console.log(`User ${this.name} logged out.`)
    }

    get email(){
        return this.#email;
    }

    roleInfo(){
        console.log(`Regular user : ${this.name}`)
    }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }

  deleteUser(user) {
    console.log(`Admin ${this.name} deleted user ${user.name}.`);
  }

  roleInfo(){
        console.log(`Admin user : ${this.name}`)
    }
}

const user2 = new User("Aryan", "aryan@mail.com");
const admin = new Admin("AdminBoss", "boss@mail.com");
user2.roleInfo();
admin.roleInfo();



// const user1 = new User("Vedant", "vedant@mail.com");
// const user2 = new User("Aryan", "aryan@mail.com");
// const admin = new Admin("AdminBoss", "boss@mail.com");

// admin.deleteUser(user1);

// const u1 = new User("A", "a@mail.com");
// console.log(u1)
// const u2 = new User("B", "b@mail.com");
// const u3 = new User("B", "b@mail.com");
// User.getUserCount(); // Total users: 2


// const user1 = new User("Vedant", "vedant@example.com");
// user1.login();   
// user1.logout();
// console.log(user1.email)


