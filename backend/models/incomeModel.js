const mongoose = require('mongoose');



const incomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 64
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 32
    },
    type: {
        type: String,
        default: 'income',
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
        maxLength: 16,
        trim: true
    },
    category: {
        type: String,
        required: true,
        maxLength: 32,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 256,
        trim: true
    },
}, {timestamps: true});


module.exports = mongoose.model('Income', incomeSchema);