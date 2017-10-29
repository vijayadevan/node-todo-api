const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp', {
    useMongoClient: true
});

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var userReg = mongoose.model('Users', {
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

var userRegister = new userReg({
email: '    vijay@example.com  '
});

userRegister.save().then((error, doc) => {
    if (error) {
        return console.log(error);
    }
    console.log(doc);
});