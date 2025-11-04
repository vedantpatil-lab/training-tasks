// ====== Arrayss =========

// let a = [1,2,3,4,5]
// let b = [6,5,3,2,2]
// console.log(a.concat(b))
// console.log([...a, ...b])
// console.log(Array.from("hello"))

// let names = ["srk", "john", "boss", "don"]
// console.log(names.sort())
// console.log(names.reverse())

// const nums = [10,2,100]
// console.log(nums.sort((a,b)=> a-b))


// const arr = [1,2,3,4,5];

// console.log(arr.slice(1,3));        
// console.log(arr.splice(2,1,"X"));   
// console.log(arr.join("-")); 

// ============ Objects ==============
// const user = {
//     name: "Ram",
//     age: 22
// }

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// const user = {
//     name: "ram",
//     age: 22,
//     address:{
//         city: "Mumbai",
//         pin: 400706
//     }
// }
// // console.log(user.address.city)

// const {name, age} = user;
// console.log(name, age)


// ============ Array Practice ==============
// let arr = ["apple", "mango", "cherry", "banana", "grapes"]
// console.log(arr[1], arr[3])
// arr[arr.length - 1] = "mango";
// console.log(arr)

// let lang = ["HTML", "CSS"]
// lang.push("Javascript")
// lang.unshift("React")
// lang.pop()
// console.log(lang)

// const nums = [2,4,6,8,10]
// // for(let i=0; i<nums.length; i++){
// //     console.log(nums[i] * 2)
// // }

// // for(let num of nums){
// //     console.log(num * 2)
// // }

// nums.forEach((num)=>{
//     console.log(num * 2)
// })

// const colors = ["red", "blue", "green", "yellow"]
// console.log(colors.includes("green"))
// console.log(colors.indexOf("green"))

// const cities = ["mumbai", "pune", "delhi", "dhule", "nashik"]
// console.log(cities.join(" | "))
// console.log(cities.slice(1,4))


// const numbers = [1, 2, 3, 4, 5];
// const squaredNums = numbers.map((num)=> num * num)
// console.log(squaredNums)

// const marks = [35, 80, 45, 90, 60, 30];
// const passedStudents = marks.filter(mark=> mark>=50)
// console.log(passedStudents)

// const expenses = [1200, 2500, 300, 600];
// const sum = expenses.reduce((acc, curr)=> acc+curr, 0)
// console.log(sum)

// const users = ["Ram", "Shyam", "Radha", "Ravi"];
// console.log(users.find(name=> name.startsWith("R")))

// const scores = [40, 100, 25, 80, 15];
// console.log(scores.sort((a,b)=>a-b))
// const bonus = [5, 10];
// const final = scores.concat(bonus)
// console.log(final.sort((a,b)=>a-b))



// const numbers = [1, [2, 3], [4, [5, 6]]];
// console.log(numbers.flat(Infinity))

// const users = ["ram", "sita", "arjun"];
// console.log(users.flatMap(name=> [name, name.toUpperCase()]))

// const students = [
//   { name: "Ram", score: 80 },
//   { name: "Sita", score: 45 },
//   { name: "Ravi", score: 70 },
//   { name: "Radha", score: 90 },
// ];

// console.log(students.filter((stud)=> stud.score < 50))

