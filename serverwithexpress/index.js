const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("This is a home page")
})

app.get("/about",(req,res)=>{
    res.send("This is an about page"+" hey "+req.query.name)
})

app.get("/contact",(req,res)=>{
    res.send("This is a contact page")
})

app.listen(8000,()=>{
    console.log("Server is started");
})

app.post("/",(req,res)=>{
    res.send("you send something to data base")
})