const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    name: {
        type: String,
        required: [true, 'field name is required!']
    },
    type: {
        type: String,
        required: [true, 'field qty is required!']
    },
    imageUrl: {
        type: String,
        required: [true, 'field imageUrl is required!']
    },
    isPopular: {
        type: Boolean
    },
})

module.exports = new mongoose.model('Activity', activitySchema);