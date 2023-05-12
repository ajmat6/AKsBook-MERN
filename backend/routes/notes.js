const express = require('express');
const Note = require('../models/Notes'); // importing notes model
const fetchuser = require('../middleware/fetchuser'); // importing fetchuser middleware
const { body, validationResult } = require('express-validator'); // Importing the express validator
const router = express.Router(); //similar like express() but this is used when we make an specilized .js file for routing so as to make our main .js file less complex


// Endpoint to get all the notes: GET -> /api/notes/fetchallnotes -> login required
router.get('/fetchallnotes', fetchuser, async (req,res) => {
    try
    {
        const notes = await Note.find({user: req.user.id}); // you can use req.user becoz of the fetchuser middleware and it will give you an array of the users
        res.json(notes);
    }
    catch(error)
    {
        console.log(error.message); //method to print the error (error.message)
        res.status(500).send("Some Internal Server Error Occured! Please try again after some times");
    }
})


// Endpoint to add a note: POST -> /api/notes/addnote -> login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({min: 3}),
    body('description', 'Enter a valid description').isLength({min: 15})
], async (req,res) => {

    try {
        // If there are any errors in meeting the above conditions then return a bad request with errors
        const error = validationResult(req);
        if (!error.isEmpty()) { 
        return res.status(400).json({ errors: error.array() });
        }

        // If there is no error than create a new note:
        const {title, description, tag} = req.body;
        const note = new Note({
            title: title,
            description: description,
            tag: tag,
            user: req.user.id
        })
        // Saving the note:
        const saveNote = await note.save();

        res.json(saveNote);
    }
    catch (error) {
        console.log(error.message); //method to print the error (error.message)
        res.status(500).send("Some Internal Server Error Occured! Please try again after some times");
    }
})
module.exports = router;