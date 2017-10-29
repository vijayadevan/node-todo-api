const mongoose = require('mongoose');

var user = mongoose.model('Users', {
    userName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports = {user};