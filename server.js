// const axios=require ("axios");// 54.9k (gzipped:20.1k)
// const express=require("express");
// const app=express();
// const PORT=6000;
// app.get('/',(req,res)=>{
//     res.send("welcome");
// });

// app.get("/users",(req,res)=>{
//     res.send("<h2>welcome to user page</h2>");
// });

const mysql=require("mysql");
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    port:2000,
    password:"",
    database:"dbnode"
   
});
con.connect((err)=>{
    if(err){
        throw err;
        console.log("database connected");
    }
     
     });