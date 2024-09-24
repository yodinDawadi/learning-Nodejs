const express = require("express");
const app = express();
const port = 8000;
const users = require("./MOCK_DATA.json");
const fs= require("fs");
app.use(express.urlencoded({extended:false}))
app.get("/users",(req,res)=>{
    const html =`
    <ul>
    ${users.map((user)=>
       ` <li>${user.first_name}</li>`
).join("")}</ul>
    `
    res.send(html);
})
app.get("/api/users",(req,res)=>{
    return res.json(users);
});

app.route('/api/users/:id')
.get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    return res.send(user);

})
.delete((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    
    if (userIndex !== -1) {
        users.splice(userIndex, 1); // Remove the user
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
            if (err) {
                return res.status(500).json({ error: "Failed to update data" });
            }
            return res.json({ status: "User deleted", id });
        });
    } else {
        return res.status(404).json({ error: "User not found" });
    }
})
.put((req,res)=>{})
.patch((req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    const userIndex = users.find((user) => user.id === id);
    
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...body }; // Update only the fields present in the request body
        
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
            if (err) {
                return res.status(500).json({ error: "Failed to update data" });
            }
            return res.json({ status: "User updated", user: users[userIndex] });
        });
    } else {
        return res.status(404).json({ error: "User not found" });
    }
});


app.post("/api/users",(req,res)=>{
    const body = req.body;
    users.push({...body,id:users.length +1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
            return res.json({status:"pending"})
    })

})
app.listen(port,()=>{
    console.log(`Server is started in port:${port}`);
});