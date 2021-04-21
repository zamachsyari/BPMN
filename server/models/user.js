const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    authorID: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    body:{
        type: String,
        required: true
    }
});


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    bmodels: [modelSchema],
    profiles: [modelSchema],
    groups: [String]
});

module.exports = mongoose.model('User', userSchema);