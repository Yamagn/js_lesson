var MongoClient = require('mongodb').MongoClient,
    settings = require('./settings');
MongoClient.connect("mongodb://" + settings.host + "/" + settings.db, function(err, db) {
    if (err) { return console.dir(err); }
    console.log("connected to db");
    db.collection("users", function(err, collection) {
        var docs = [
            { name: "taguchi", score: 40 },
            { name: "yamagen", score: 80 },
            { name: "kusa", score: 60 }
        ];
        collection.insert(docs, function(err, result) {
            console.dir(result);
        });
    });
});