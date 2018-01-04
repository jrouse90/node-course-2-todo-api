// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, database) => {
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connect to MongoDB server");
    const db = database.db("TodoApp");
    
    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID("5a4e4f7456b5b2a3cf7b2d9b")}, { 
    //     $set: {
    //         completed: true
    //     }},
    //     {
    //     returnOriginal: false
    
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5a4bae167b4fa25deb76b935")
    }, {
        $set: {
            name: "Jason"
        },
        $inc: {
            age: +1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // database.close();
});