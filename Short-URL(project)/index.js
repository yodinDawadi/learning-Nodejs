const express = require('express');

const urlRoute = require('./routes/url');

const app = express();

const {connectToMongoDB}= require('./connection')

const PORT = 8001;

//connection of mongodb
connectToMongoDB(' mongodb://127.0.0.1:27017/short-url')
.then(()=>console.log('mongoDB is connected'))
.catch((err)=>console.log('Failed to connect with mongoDB, error: ',err))

//route
app.use("/url", urlRoute);

app.listen(PORT,()=>console.log('server is started at port: ',PORT))