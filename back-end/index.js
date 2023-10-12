const express = require('express');
const connection = require('./db');
const UserModel = require('./model/user.model');
const app = express()
require("dotenv").config();


app.get("/", async (req,res)=>{

    try{
        console.log("Welcome to make your T Backend");
    
        const data = await UserModel.find({});

        res.status(200).json({msg:"Welcome to make your T Backend use /products route for products and /user routes for users",data:data});
    }
    catch(err){
        res.status(400).json({msg:err.message});
    }
})


app.listen(process.env.PORT, async() =>{ 
    try{
        await connection;
        console.log("Connected to DB");
        console.log(`Example app listening on port ${process.env.PORT}!`);
    }
    catch(err){
        console.log(err.message);
    }
})
