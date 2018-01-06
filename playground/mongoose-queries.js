const {ObjectID} = require("mongodb");
const  {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// var id = "5a511341c6c81b057def6e6c11";
var id = "5a4f9a4c91824f20175cf7dd";
// if(!ObjectID.isValid(id)){
//     console.log("ID not valid");
// }
 
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos: ", todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todos) => {
//     console.log("Todo: ", todos);
// });

// Todo.findById(id).then((todos) => {
//     if (!todos){
//         return console.log("ID not found");
//     }
//     console.log("Todo by id: ", todos);
// }).catch((e) => {
//     console.log(e);
// });
User.findById(id).then((user) => {
    if (!user){
        return console.log("User not found");
    }
    console.log("User by id: ", user);
}).catch((e) => {
    console.log(e);
});