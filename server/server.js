const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp',{
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

var newTodo = new Todo(
    {
        text: "first one",
        completed: true,
        completedAt: 20130531
    }
);

newTodo.save().then((error, doc) => {
    if(error) {
        return console.log(error);
    }
    console.log(doc);
});