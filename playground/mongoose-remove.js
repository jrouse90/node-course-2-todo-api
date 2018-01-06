const {ObjectID} = require("mongodb");
const  {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// Todo.remove({}) - removes everything

// Todo.findOneAndRemove({})

// Todo.findByIdAndRemove()
Todo.findByIdAndRemove("5a51313850c70d1a38e9dbee").then((todo) => {
    console.log(todo);
});
