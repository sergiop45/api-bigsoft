const mongoose = require('mongoose');

const ModelEmail = new mongoose.Schema({
    
    name: {
            type: String,
            required: true   
            },
    fone: String,
    email: {
            type: String,
            required: true   
            },
    message: String,
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Email', ModelEmail);