const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    todoName: {
        type: String,
        required: [true, "Please enter a text"],
    },
    todoLink: {
        type: String,
    },
    todoDescription: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Todo', todoSchema)