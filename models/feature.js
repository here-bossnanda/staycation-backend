const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const featureSchema = new Schema({
    name: {
        type: String,
        required: [true, 'field name is required!']
    },
    qty: {
        type: Number,
        required: [true, 'field qty is required!']
    },
    imageUrl: {
        type: String,
        required: [true, 'field imageUrl is required!']
    }
})

module.exports = new mongoose.model('Feature', featureSchema);