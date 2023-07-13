const mongoose = require('mongoose');

const ModelPost = new mongoose.Schema({
    
    title: {
            type: String,
            required: true   
            },
    description: {
                  type: String,
                  required: true   
                 },
    author: String,
    image: String,
    category:   {
                type: String,
                required: true 
                }               
    },
    
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Post', ModelPost);