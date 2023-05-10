const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator'); // Importing the express validator
const router = express.Router(); //similar like express() but this is used when we make an specilized .js file for routing so as to make our main .js file less complex

//Create a user using: POST "api/auth" -> is end point par
router.post('/',[ //creating an array of the validation
    body('username', 'Enter a valid Username').notEmpty(), //username should not be empty and the second '' in the body is the error message that you can give if username is empty.
    body('email', 'Enter a valid Email Address').isEmail(), // validation for the email
    body('password', 'Minimum length of the Password should be 8 characters').isLength({min: 8}), // password length should be minimum 8 characters
], (req,res) => {
    // res.json(obj); //sends json response

    // validation result khalli nahi he matlab error he therefore sending error to the user
    const result = validationResult(req);
    if (!result.isEmpty()) { 
       return res.status(400).json({ errors: result.array() });
    }

    // check if the user with that particular username and email already exists:
    let alreadyUsername = User.findOne({username: req.body.username});
    let alreadyEmail = User.findOne({email: req.body.email});

    if(alreadyUsername)
    {
        return res.status(400).json({error: "Username already exists"});
    }

    if(alreadyEmail)
    {
        return res.status(400).json({error: "This Email is already registered, Please enter a valid Email"});
    }

    //Below is used to save the data in the DB and it is same as below two lines
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then((value) => {
        res.json(value) // printing the recieved details in the console
    }).catch((error) => {
        console.log(error); // printing the error in the console
        res.json({error: "Please enter valid details"}); //sending error response to the client
    });


    // const user = User(req.body); // request me jo data aa raha he sending it to the schema of User.js
    // user.save(); //and then saving it and it will create react name db and users name collection in the db
})

module.exports = router;