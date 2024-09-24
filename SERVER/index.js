const http = require('http');
const fs = require('fs');
const url = require("url");
const MyServer = http.createServer((req,res)=>{
if(req.url ==="/favicon.ico")
        return res.end();
    
const myUrl = url.parse(req.url,true);
const username = myUrl.query.myname;
const log=`${Date.now()}: ${req.url} New Request Recorded,${username}\n`;
console.log(myUrl); 
fs.appendFile("log.txt",log,(err,data)=>{
    console.log("new request recorded")
    
    switch(myUrl.pathname){
        case "/":res.end("Homepage")
        break;
        case "/about":res.end(`AboutPage,hi ${username}`)
        break;
        case "/contact":res.end("Contact-us Page")
        break;
        default:
            res.end("404 page not found")
    }
})
});

MyServer.listen(8000,()=>{console.log("Server Started!!")});