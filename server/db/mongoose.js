const mongoose = require('mongoose');

const uri = "mongodb://vijayadevan:LrGSdYiCvSlSNVnM@mongoplay-shard-00-00-nuszv.mongodb.net:27017,mongoplay-shard-00-01-nuszv.mongodb.net:27017,mongoplay-shard-00-02-nuszv.mongodb.net:27017/TodoApp?ssl=true&replicaSet=MongoPlay-shard-0&authSource=admin"

mongoose.Promise = global.Promise;

mongoose.connect(uri, {
    useMongoClient: true
});

module.exports.mongoose = mongoose;