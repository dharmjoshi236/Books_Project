const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    summary: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const bookModel = mongoose.model("book", bookSchema);
module.exports = bookModel;