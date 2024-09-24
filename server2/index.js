const http = require("http");
const fs = require("fs");
const server=http.createServer((req,res)=>{
    const log= `${Date.now()}:'${req.url}' New Request Recorded\n`;
    fs.appendFile("log.txt",log,(err,data)=>{
        console.log(`New Request Recorded`);
        switch(req.url){
            case "/":res.end("HomePage")
            break;
            case "/contact":res.end("contactPage");
            break;
            case "/about":res.end("AboutPage");
            break;
            default:
                res.end("404 Page Not Found")
        }
    })
})
 server.listen(4000,()=>{
    console.log("Server is started")
 })