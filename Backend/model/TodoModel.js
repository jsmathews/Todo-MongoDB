const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
}, {
    toJSON: {
        versionKey: false
    }
});

module.exports = mongoose.model('todo', todoSchema);