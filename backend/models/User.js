const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({ 
    username:{
        type: String,
        required: true, //will make it compulsory
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true //will be unique for every user
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now //dont call it here by applying () it will run at the time user signup and login
    }
});

module.exports = mongoose.model('user', UserSchema); //this will create users collection in the react database