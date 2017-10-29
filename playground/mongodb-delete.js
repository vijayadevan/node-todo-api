const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log(err);
        return console.log('Unable to Connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    db.collection('Todos').deleteMany({
        sex: "male"
    }, (error, result) => {
        if (error) {
            return console.log('Unable to delete todo', err);
        }
        console.log(JSON.stringify(result, undefined, 2));
    });
});