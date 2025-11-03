const fs = require("node:fs")

// fs.writeFile("./notes.txt", "Learning FS module in Node.js", (err)=>{
//     if(err) throw err
//     console.log("File created successfully !")
// })

// fs.appendFile("./notes.txt", "Appended line: Node.js is powerful!", (err)=>{
//     if(err) throw err
//     console.log("File appended successfully !")
// })

// fs.readFile("./notes.txt", "utf8", (err, data)=>{
//     if(err ) throw err
//     console.log("File data: ", data)
// })

// fs.rename("./notes.txt", "./myNotes.txt", (err)=>{
//     if(err) throw err
//     console.log("File renamed !")
// })

// fs.unlink("./myNotes.txt", (err)=>{
//     if(err) throw err
//     console.log("File deleted successfully !")
// })

// fs.mkdir("./backup", (err)=>{
//     if(err) throw err
//     console.log("Folder created successfully !")
// })

// fs.readdir("./backup", (err, files)=>{
//     if(err) throw err
//     console.log(files)
// })

// fs.rmdir("./backup", (err)=>{
//     if(err) throw err
//     console.log("Folder deleted successfully !")
// }
// )


// ======= File Stats =======
// fs.stat("./myNotes.txt", (err, stats)=>{
//     if(err) throw err
//     console.log(stats)
// })


// ======= File Streaming =======
// const readStreams = fs.createReadStream("./myNotes.txt", "utf8")

// readStreams.on("data", (chunk)=>{
//     console.log("Received Chunks : ", chunk)
// })


// ======== Write Streaming ==========
// const writeStream = fs.createWriteStream("./output.txt")
// writeStream.write("This is written using Write Stream.\n")
// writeStream.write("Streams handle large data efficiently.")
// writeStream.end()
// writeStream.on("finish", ()=> console.log("Writing Completed !"))

// ===== Copying a file =======
// fs.copyFile("./output.txt", "./copiedOutput.txt", (err)=>{
//     if(err) throw err
//     console.log("File copied successfully !!")
// })