// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, database) => {
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connect to MongoDB server");
    const db = database.db("TodoApp");
    
    // deleteMany
    db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) =>{
        console.log(result);
    });
    // deleteOne
    db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result) =>{
        console.log(result);
    });
    // findOneAndDelete


    

    // database.close();
});