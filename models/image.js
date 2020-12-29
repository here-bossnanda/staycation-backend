const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    imageUrl: {
        type: String,
        required: [true, 'field imageUrl is required!']
    }
})

module.exports = new mongoose.model('Image', imageSchema);