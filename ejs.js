const express=require('express');
const app=express();
const PORT=3000;
const mysql=require('mysql');

const mysqlconnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    p
})

app.listen(PORT, ()=>{
    console.log(`the app is running on port ${PORT}`)
});

app.get('/', (req, res)=>{
    res.send('welcome')
});