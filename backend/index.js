const express=require('express');
const bodyParser = require('body-Parser');
const { createTodo }= require('./types');
const { updateTodo }= require('./types');
const { Todo } = require('../db');
const app =express();

//Middleware for parsing request bodies
app.use(bodyParser.json());

app.post("/todo", async function(req,res) {
    const payLoad=req.body;
    const checkpayLoad= createTodo.safeParse(payload);
    if (!checkpayLoad.success){
        res.status(411).json({
            msg:"you sent the wrong input"
        })
        return;
    }
    await Todo.create({
        title:payload.title,
        description:payload.description,
        completed:false
    })
    res.status(200).json({
        msg:"todo created successfully"
    })

});
app.get("/todos",async function(req,res) {
    const alltodo=await Todo.find({});
    res.json({
        Todos:alltodo
    })
});



app.put("/completed",async function(req,res) {
    const checkStatus=req.body;
    const parsecheckStatus=updateTodo.safeParse(checkStatus);
    if(!parsecheckStatus){
        res.ststus(411).json({
            msg:"you sent the wrong input"
        })
        return;  
    }
    await Todo.update({
        _id:req.body.id
    },{
        completed:true 
    })
    res.json({
        msg:"todo updated" 
    })
});


const PORT =3000;

app.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`);
})