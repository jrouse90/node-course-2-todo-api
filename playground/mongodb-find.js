// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, database) => {
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connect to MongoDB server");
    const db = database.db("TodoApp");

    // db.collection("Todos").find({
    //     _id: new ObjectID("5a4ce4f385e315891178326a")
    // }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos", err)
    // })
    // db.collection("Todos").find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log("Unable to fetch todos", err)
    // })
    db.collection("Users").find({name: "Max"}).toArray().then((docs) => {
        console.log("Users:");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch users", err)
    });


    // database.close();
});