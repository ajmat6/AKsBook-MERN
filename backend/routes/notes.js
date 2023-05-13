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


// Endpoint to Update a note: PUT(for updating an existing resource) -> /api/notes/updatenote/:id -> login required
router.put('/updatenote/:id', fetchuser, async (req,res) => {
    const {title, description, tag} = req.body;

    //Create a new note:
    const newnote = {};
    
    // if you are getting title, description and tag then adding it to newnote;
    if(title)
    {
        newnote.title = title;
    }

    if(description)
    {
        newnote.description = description;
    }

    if(tag)
    {
        newnote.tag = tag;
    }

    //Now find the note to be updated and update it:
    let note = await Note.findByIdAndUpdate(req.params.id); // here params.id is notes id and it will be recieved in the path of the put request(thats why req.params)

    // if the requested above not does not exist:
    if(!note)
    {
        return res.status(404).send("Not Found");
    }

    // if the current user is trying to access other user's note(checking for the user):
    if(note.user.toString() !== req.user.id) // user is a parameter in Notes model and converting it into a string (this is user id)
    {
        return res.status(401).send("Not Allowed");
    }

    // Now you have verified the user and also the requested note exist, So now update that note:
    note = await Note.findByIdAndUpdate(req.params.id, {$set: newnote}, {new:true}) // set will set the updatede note and new will update it so you are making it true

    res.json(note);
});

module.exports = router;