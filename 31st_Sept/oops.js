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


