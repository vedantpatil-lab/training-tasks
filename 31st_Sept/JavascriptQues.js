// sayHello();

// var sayHello = function () {
//   console.log("Hey there!");
// };  // Error : not a function.

// const arr = []

// arr.push(function(){
//     console.log(1)
// })

// console.log(arr)

// function createFunctions() {
//   const funcs = [];

//   for (let i = 0; i < 3; i++) {
//     funcs.push(function () {
//       console.log(i);
//     });
//   }

//   return funcs;
// }

// const functions = createFunctions();

// functions[0]();
// functions[1]();
// functions[2]();


// console.log("1");

// async function fetchData() {
//   console.log("2");
//   await new Promise((resolve) => setTimeout(resolve, 0));
//   console.log("3");
// }

// fetchData();

// console.log("4");


// const user = {
//   name: "Vedant",
//   greet: function () {
//     console.log("Hello, " + this.name);
//   },
// };

// // const greetFn = user.greet;
// // greetFn();
// // console.log(greetFn())
// user.greet()

/* const user = {
  name: "Vedant",
  greet: () => {
    console.log("Hello, " + this.name);
  },
};

user.greet();
 */

// const user = {
//   name: "Vedant",
 
//     arrowFn : () => {
//       console.log("arrowFn -> " + this.name);
//     }

//     // arrowFn();
//   }


// user.arrowFn();


// const user = {
//   name: "Vedant",
//   regularFn: function () {
//     console.log("regularFn -> " + this.name);

//     const arrowFn = () => {
//       console.log("arrowFn -> " + this.name);
//     };

//     arrowFn();
//   },
// };

// user.regularFn();







