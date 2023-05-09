const connectToMongo = require('./db');
const express = require('express');
connectToMongo();
const app = express();
const port = 3000

app.get('/', (req,res) => {
    res.send("hello you are connected");
})

app.listen(port, (req,res) => {
    console.log("server is listening at port " + port);
})