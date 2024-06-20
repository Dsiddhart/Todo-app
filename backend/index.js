const express=require('express');
const bodyParser = require('body-Parser');
const { createTodo }= require('./types');
const { updateTodo }= require('./types')
const app =express();

//Middleware for parsing request bodies
app.use(bodyParser.json());

app.post("/todo",function(req,res) {
    const payLoad=req.body;
    const checkpayLoad= createTodo.safeParse(payload);
    if (!checkpayLoad.success){
        res.ststus(411).json({
            msg:"you sent the wrong input"
        })
        return;
    }


});
app.get("/todos",function(req,res) {
    
});
app.put("/completed",function(req,res) {
    const checkStatus=req.body;
    const parsecheckStatus=updateTodo.safeParse(checkStatus);
    if(!parsecheckStatus){
        res.ststus(411).json({
            msg:"you sent the wrong input"
        })
        return;  
    }
});


const PORT =3000;

app.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`);
})