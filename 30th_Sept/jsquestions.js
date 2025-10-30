// console.log(a);
// var a = 20;

// console.log(a);
// let a = 20;

// function test() {
//   console.log(a);
//   var a = 5;
// }
// test();

// function a() {
//   console.log(b);
// }
// a();
// var b = 10;

// let x = 10;
// {
//   console.log(x);
//   let x = 20;
// }


// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }
// const fn = outer();
// fn();
// fn();

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// console.log(1 + "2" + "2");

// console.log(1 + +"2" + "2");

// console.log(1 + -"1" + "2");

// console.log(+"1" + "1" + "2");

// console.log("1" + -"1")

// console.log([] == ![]);
// console.log(typeof NaN)

// console.log("A");
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() => console.log("C"));
// console.log("D");

// async function foo() {
//   return 10;
// }
// console.log(foo());

// const obj = {
//   name: "Vedant",
//   getName: function () {
//     return this.name;
//   },
// };
// const fn = obj.getName;
// console.log(fn());


// const user = {
//   name: "Vedant",
//   greet: () => console.log(this.name),
// };
// user.greet();

// function add(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// add(2, 3, 4);

// const name = function (name){
//     console.log(name)
// }
// name("vedant")

// const arr = [1, 2, 3];
// arr[10] = 99;
// console.log(arr.length);
// console.log(arr);

// const nums = [1, 2, 3];
// nums[100] = 200;
// console.log(nums.length);

// console.log(typeof typeof 1);

// const x = (y = 10);
// console.log(typeof x, typeof y);

// let x = [1, 2, 3];
// let y = [1, 2, 3];
// console.log(x == y);
// console.log(x === y);

// console.log([] + []);
// console.log([] + {});
// console.log({} + []);
// console.log({} + {});


// const a = { name: "Vedant" };
// // console.log(a)
// const b = { ...a };
// // console.log(b)
// console.log(a === b);

// const obj = { a: 1, b: 2, c:3 };
// const { a, ...rest } = obj;
// console.log(rest);