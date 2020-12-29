const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'field first name is required!']
    },
    lastName: {
        type: String,
        required: [true, 'field last name is required!']
    },
    email: {
        type: String,
        required: [true, 'field email is required!']
    },
    phoneNumber: {
        type: String,
        required: [true, 'field phone number is required!']
    }
})

module.exports = new mongoose.model('Member', memberSchema);