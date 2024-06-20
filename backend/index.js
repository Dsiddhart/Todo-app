const express=require('express');
const bodyParser = require('body-Parser');

const app =express();

//Middleware for parsing request bodies
app.use(bodyParser.json());

const PORT =3000;

app.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`);
})