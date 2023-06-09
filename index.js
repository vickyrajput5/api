const express = require("express");
const app =express();
const cors = require("cors")
const Port = process.env.PORT || 4000;
const apiData = require('./services.json')
app.use(cors())
app.get("/" , (req,res)=>{
    res.send("helo")
})
app.get("/services" , (req,res)=>{
    res.send(apiData)
})
app.listen(Port, ()=>{
    console.log(`Server listing port is ${Port}`)
})