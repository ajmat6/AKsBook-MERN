const express = require('express');
const User = require('../models/User');
const router = express.Router(); //similar like express() but this is used when we make an specilized .js file for routing so as to make our main .js file less complex

//Create a user using: POST "api/auth" -> is end point par and it doesn't require Auth
router.post('/', (req,res) => {
    // res.json(obj); //sends json response
    console.log(req.body);
    const user = User(req.body); // request me jo data aa raha he sending it to the schema of User.js
    user.save(); //and then saving it and it will create react name db and users name collection in the db
    res.send(req.body); //client will see request body in the response
})

module.exports = router;