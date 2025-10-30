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


// const students = [
//   { name: "Bob", age: 24, course: "Physics" },
//   { name: "Charlie", age: 21, course: "Mathematics" },
//   { name: "Diana", age: 23, course: "Computer Science" },
//   { name: "Eve", age: 20, course: "Chemistry" }
// ];

// await Student.insertMany(students);
// console.log("Multiple students inserted !");

// // const olderStudents = await Student.find({age : {$gt: 21}})
// // console.log("Older Students: ", olderStudents)

// const studentCourse = await Student.find({course: "Computer Science"});
// console.log("Student with CS: ", studentCourse)
// // const allStudents = await Student.find();
// // console.log("All students: ", allStudents)

// const rangeStudents = await Student.find({ age: { $gte: 21, $lte: 23 } });
// console.log("📊 Students aged 21–23:", rangeStudents);


// ------ Update and delete queries -------

// await Student.updateOne(
//   { name: "Bob"},
//   { $set : {course: "Astronomy"}}
// )

// console.log("Bob's course updated !!");

// await Student.updateMany(
//   {course: "Computer Science"},
//   {$set : {course : "Full stack development"}}
// )

// const student_id = "6901b07ef74c46f5112d808";
// const updatedStudent = await Student.findByIdAndUpdate(
//   student_id,
//   {age : 25},
//   {new : true}
// )
// console.log(updatedStudent);


// await Student.deleteOne(
//   {name: "Bob"}
// )

// await Student.deleteMany(
//   {course: "Chemistry"}
// )


// const deletedStudent = await Student.findByIdAndDelete(student_id);


// ------- Sorting, Limiting and field Selection -------
// const sortedAsc = await Student.find().sort({age: 1});
// console.log("Ascending : ", sortedAsc);

// const sortedDesc = await Student.find().sort({age: -1});
// console.log("Ascending : ", sortedDesc);

// const multiFields = await Student.find().sort({ course: -1, age: 1 });
// console.log(multiFields);

// const limited = await Student.find().limit(2)
// console.log(limited);

// const nameAndCourse = await Student.find().select("name course")
// console.log(nameAndCourse);

// const result = await Student.find({ age: { $gte: 21 } })
//   .select("name age course -_id")
//   .sort({ age: -1 })
//   .limit(8);

// console.log("⚡ Combined query result:", result);




app.listen(3000, ()=>{
    console.log("App is running on port 3000")
})