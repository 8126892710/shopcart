const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    name: {
        type: String
    },
    mobile: {
        type: Number
    },
    email: {
        type: String
    }
}, {
    timestamps: true, collection: 'user'
})

module.exports = mongoose.model('user', user);