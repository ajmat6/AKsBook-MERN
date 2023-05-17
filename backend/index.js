const connectToMongo = require('./db'); //importing db as our self made module
const express = require('express');
const cors = require('cors')
connectToMongo(); //running the db module
const app = express();
const port = 5001

app.use(cors()) // to call this api from the browser you have to use this cors functionality
app.use(express.json()); //middleware function and it parses incoming json requests and puts the parsed data in req.body
 
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, (req,res) => {
    console.log("server is listening at port " + port);
})