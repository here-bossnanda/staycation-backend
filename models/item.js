const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const itemSchema = new Schema({
    title: {
        type: String,
        required: [true, 'field title is required!']
    },
    price: {
        type: Number,
        required: [true, 'field price is required!']
    },
    country: {
        type: String,
        default: 'Indonesia'
    },
    city: {
        type: String,
        required: [true, 'field city is required!']
    },
    isPopular: {
        type: Boolean
    },
    description: {
        type: Number,
        required: [true, 'field price is required!']
    },
    imageId: [{
        type: ObjectId,
        ref: 'Image'
    }],
    featureId: [{
        type: ObjectId,
        ref: 'Feature'
    }],
    activityId: [{
        type: ObjectId,
        ref: 'activityId'
    }]
})

module.exports = new mongoose.model('Item', itemSchema);