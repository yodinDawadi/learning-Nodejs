const express = require("express");
const app = express();
const port=8000;
const fs = require("fs");
const users = require("./MOCK_DATA.json")
app.route("/api/users/:id")
.get((res,req)=>{
const id =Number(req.params.id);
const user = users.find((user)=> user.id === id)
return res.send(user);
})
.put((req,res)=>{

})
.patch((req,res)=>{

})
.delete((req,res)=>{

});

app.post("api/users",(req,res)=>{

})

app.listen(port,()=>{
    console.log("Server is started");
})