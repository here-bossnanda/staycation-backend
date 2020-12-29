const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const bookingSchema = new Schema({
    bookingStartDate: {
        type: Date,
        required: [true, 'field booking start date is required!']
    },
    bookingEndDate: {
        type: Date,
        required: [true, 'field booking end date is required!']
    },
    itemId: [{
        _id: {
            type: ObjectId,
            ref: 'Item',
            required: true
        },
        price: {
            type: Number,
            required: [true, 'field booking end date is required!']
        },
        night: {
            type: Number,
            required: [true, 'field night is required!']
        }
    }],
    memberId: [{
        type: ObjectId,
        ref: 'Member'
    }],
    bankId: [{
        type: ObjectId,
        ref: 'Bank'
    }],
    proofPayment: {
        type: String,
        required: [true, 'field proof payment is required!']
    },
    bankFrom: {
        type: String,
        required: [true, 'field bank is required!']
    },
    accountHolder: {
        type: String,
        required: [true, 'field account holder is required!']
    },
    status: {
        type: String,
        required: [true, 'field status is required!']
    }
})

module.exports = new mongoose.model('Booking', bookingSchema);