const fs = require("node:fs")

// function createFile(pathName){

//     // Sync
//     // fs.writeFileSync(pathName, "Hello Nodejs\n")
//     // fs.appendFileSync(pathName, "Hello jaavscript")
//     // console.log("File has been created !")


//     // Async
//     // error first callbacks
//     fs.writeFile(pathName, "Hello Nodejs\n", (err)=>{
//         if(err){
//             console.log("Something went wrong !")
//             return
//         }
//          console.log("File has been created asynchronously.");
        
//     });

//     console.log("File opearation done")
// }

// createFile('./hello.txt') 

// ------ FS Methods -------

// 1) Write and append in file
// fs.writeFile("./hello.txt", "Hello nodejs !!\n", (err)=>{
//     if(err) throw err
//     console.log("File created !")
// })

// fs.appendFile("./hello.txt", "Hello Javascript", (err)=>{
//     if(err) throw err;
//     console.log("File appended !")
// }
// )


// 2) Read File;
// fs.readFile("./hello.txt", "utf-8", (err, data)=>{
//     if(err) throw err
//     console.log("File data : \n", data)
// }) 

// // 3) File rename
// fs.rename("./hello.txt", "renamed.txt", (err)=>{
//     if(err) throw err
//     console.log("File renamed !")
// })

// 4) File unlink / delete
// fs.unlink("./renamed.txt", (err)=>{
//     if(err) throw err
//     console.log(" File deleted !")
// })

// // 5) --- Check if file exists

// if(fs.existsSync("./renamed.txt")){
//     console.log("File exists !")
// }else{
//     console.log("File does not exists !")
// }

// 6) ---- Create a new directory / folder
// fs.mkdir("myFolder", (err)=>{
//     if(err) throw err
//     console.log("Folder created !")
// })

// ----- nested directories -----

// fs.mkdir("./parent/child", {recursive : true} , (err)=>{
//     if(err) throw err
//     console.log("Nested folders created !")
// })


