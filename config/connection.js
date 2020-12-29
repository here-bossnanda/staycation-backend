const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dbstaycation', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

module.exports = mongoose;