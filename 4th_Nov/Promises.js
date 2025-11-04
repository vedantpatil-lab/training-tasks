const fs = require("node:fs")

function readFile(){
    return new Promise((resolve, reject)=>{
        fs.readFile("./new.txt", "utf8", (err, data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

readFile()
.then(data => console.log("Data : ", data))
.catch(err => console.error("Error : ", err))