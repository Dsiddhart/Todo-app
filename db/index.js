const mongoose =require("mongoose");

// connect mongoose
mongoose.connect('');

// define schema
/*
{
    Title: gym,
    description: got gym 6 to 8


}
*/
const TodoSchema = new moongose.Schema({
    title:String,
    description:String,
    completed:Boolean
});

const Todo=mongoose.model('Todo',TodoSchema);

module.exports={
    Todo
}
