// const car = {
//     brand : "Suzuki",
//     model: "Swift",
//     year: 2012,
//     color: "white"
// }
// console.log(`Brand: ${car.brand}, Color: ${car.color}`) 
// car.price = 230000;
// car.color = "black"
// delete car.year;
// console.log(car)
// console.log("model" in car)
// console.log(Object.keys(car).length)

// const student = {
//   name: "Rahul",
//   marks: {
//     math: 85,
//     science: 90,
//     english: 78
//   },
//   hobbies: ["reading", "gaming"]
// };
// console.log(student.marks.science)
// student.marks.computer = 95
// console.log(student.hobbies.at(-1))

// const { name, marks: { science }, hobbies: [firstHobby] } = student;
// console.log(name, science, firstHobby)

const user = {
  name: "Priya",
  age: 22,
  city: "Delhi"
};
// // console.log(Object.entries(user))
// for (let key in user) {
//   console.log(`${key} : ${user[key]}`);
// }
const entries = Object.entries(user);
const userCopy = Object.fromEntries(entries);
console.log(entries)
console.log(userCopy)


