// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, database) => {
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }

    console.log("Connect to MongoDB server");

    const db = database.db("TodoApp");

    // const collection = db.createCollection("Todos", (err, res) => {
    //     if (err) {return console.log("Unable to create collection");}
    // });
    
    // db.collection("Todos").insertOne({
    //     text: "Something to do",
    //     completed: false

    // }, (err, result) => {
    //     if (err){
    //         return console.log("Unable to insert todo", err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection("Users").insertOne({
    //     name: "Max",
    //     age: 33,
    //     location: "There"

    // }, (err, result) => {
    //     if (err){
    //         return console.log("Unable to insert user", err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    database.close();
});