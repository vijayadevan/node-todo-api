const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log(err);
        return console.log('Unable to Connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: ObjectId("59f5c0848ba9c809d0641a1f")
    }, {
            $set:
            {
                name: "Marudhu"
            },
            $inc:
            {
                age: 1
            }
        }, {
            returnOriginal: false
        }
    ).then((error, result) => {
        if (error) {
            return console.log(error);
        }
        console.log(result);
    });
    db.close();
});
