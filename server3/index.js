const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{
         const log= `${date.now()}: New request recorded\n`;
         fs.appendFile("log.txt",log,(err,data)=>{
            console.log("New request recorded")
            res.end("hello")
         })
})
server.listen(6000,()=>{
    console.log("server started")
})