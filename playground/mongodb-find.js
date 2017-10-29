const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log(err);
        return console.log('Unable to Connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').find({
        name: 'vijay'
    }).count().then((count) => {
        console.log(count);
    }, (err) => {
        console.log
    });

    db.close();
});