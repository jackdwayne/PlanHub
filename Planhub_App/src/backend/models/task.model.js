const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    date: { 
        type: String, 
        required: true,
        unique: false,
        trim: true,
        minlength: 0
    },
    data: { 
        type: String, 
        required: true,
        unique: false,
        trim: true,
        minlength: 0
    },
    priority: { 
        type: Number, 
        required: true,
        unique: false,
        trim: true,
        minlength: 0
    },
}, {
    timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;