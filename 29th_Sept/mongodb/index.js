import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import Student from "./models/studentSchema.js";


dotenv.config();
const app = express();

connectDB();

// const newStudent = new Student({
//     name: "vedant",
//     age: 23,
//     course: "nodejs"
// });

// await newStudent.save();
// console.log(newStudent)


const students = [
  { name: "Bob", age: 24, course: "Physics" },
  { name: "Charlie", age: 21, course: "Mathematics" },
  { name: "Diana", age: 23, course: "Computer Science" },
  { name: "Eve", age: 20, course: "Chemistry" }
];

await Student.insertMany(students);
console.log("Multiple students inserted !");

// const olderStudents = await Student.find({age : {$gt: 21}})
// console.log("Older Students: ", olderStudents)

const studentCourse = await Student.find({course: "Computer Science"});
console.log("Student with CS: ", studentCourse)
// const allStudents = await Student.find();
// console.log("All students: ", allStudents)

const rangeStudents = await Student.find({ age: { $gte: 21, $lte: 23 } });
console.log("📊 Students aged 21–23:", rangeStudents);


app.listen(3000, ()=>{
    console.log("App is running on port 3000")
})