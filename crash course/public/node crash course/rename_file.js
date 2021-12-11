const fs = require("fs");
const path = require ("path");

fs.rename(path.join(__dirname,"/test", "helo.txt"),path.join(__dirname,"/test", "hello.txt"), (err) => {
    if(err) throw err;
    console.log("file renamed....")
})