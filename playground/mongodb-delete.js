const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log(err);
        return console.log('Unable to Connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').find({ name: { $exists: false } }).toArray().then((res) => {
        resp = new ObjectId(res[0]._id);
        console.log(resp);
        db.collection('Todos').deleteMany({ _id: resp }), (error, result) => {
            if (error) {
                return console.log(error);
            }
            console.log(result);
        };
        // db.collection('Todos').deleteMany({resp}).then((error, result ) => {
        //     if(error) {
        //        return console.log(error);
        //     }
        //     console.log(result);
        // });
        db.close();
    });
    // db.collection('Todos').updateMany({
    //     sex: "male"
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to update todo', err);
    //     }
    //     console.log(JSON.stringify(result, undefined, 2));
    // });
});