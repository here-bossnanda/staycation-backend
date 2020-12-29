const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bankSchema = new Schema({
    nameBank: {
        type: String,
        required: [true, 'field bank is required!']
    },
    numberRekening: {
        type: String,
        required: [true, 'field number rekening is required!']
    },
    name: {
        type: String,
        required: [true, 'field name is required!']
    }
})

module.exports = new mongoose.model('Bank', bankSchema);