// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, database) => {
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connect to MongoDB server");
    const db = database.db("TodoApp");
    
    // deleteMany
    // db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) =>{
    //     console.log(result);
    // });
    // deleteOne
    // db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result) =>{
    //     console.log(result);
    // });
    // findOneAndDelete
    // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    
    // db.collection("Users").deleteMany({name: "Max"}).then((result) =>{
    //     console.log(result);
    // });
    // db.collection("Users").findOneAndDelete({_id: new ObjectID("5a4bae2615a1a05e008bcea1")}).then((result) => {
    //     console.log(result);
    // });

    // database.close();
});