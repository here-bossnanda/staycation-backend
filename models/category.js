const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'field name is required!']
    }
})

module.exports = new mongoose.model('Category', categorySchema);