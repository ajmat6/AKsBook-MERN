const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({ 
    user:{
        type: mongoose.Schema.Types.ObjectId, //mongoose jo variable banaya usme se objectid 
        ref: 'user' // giving user model of the mongoose variable as the reference model here
    },
    title:{
        type: String,
        required: true
    },
    description:{
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