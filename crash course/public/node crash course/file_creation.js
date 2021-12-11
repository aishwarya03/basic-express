const fs = require("fs");
const path = require("path");
// make director 
// fs.mkdir(path.join(__dirname,'/test'), {}, (err)=>{
//     if(err) throw err;
//     console.log("folder created..");
// })
fs.writeFile(path.join(__dirname,"/test","helo.txt"),"hellooooooo world",(err)=>{
    if(err) throw err;
    console.log("file written .....")

    fs.appendFile(path.join(__dirname,"/test", "helo.txt")," what",(err)=>{
        if(err) throw err;
        console.log("file written .....")
    })
})

// this will override the above text writen on the file
// fs.writeFile(path.join(__dirname,"/test", "helo.txt"),"what",(err)=>{
//     if(err) throw err;
//     console.log("file written .....")
// })

// so to avoid that we have to append files