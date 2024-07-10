const mongoose =require("mongoose");

// connect mongoose
mongoose.connect("mongodb+srv://dsiddharth4295:77hwPxB9e2Db07i9@cluster0.8fsptse.mongodb.net/todo");

// define schema
/*
{
    Title: gym,
    description: got gym 6 to 8


}
*/
const TodoSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
});

const Todo=mongoose.model('Todo',TodoSchema);

module.exports={
    Todo
}
