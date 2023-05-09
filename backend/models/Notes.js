const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({ 
    title:{
        type: String,
        required: true
    },
    desciption:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now //dont call it here by applying () it will run at the time user signup and login
    }
});

module.exports = mongoose.model('notes', NotesSchema);