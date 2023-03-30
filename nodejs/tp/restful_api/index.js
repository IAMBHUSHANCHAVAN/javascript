// const exp= require("express")
const express = require("express")
const fs = require("fs/promises")
const app = express()
function readalldata(){
    return fs.readFile("data.json","utf-8")
    // .then(data =>JSON.parse(data.toString()))
    .then(function(data){
        return JSON.parse(data.toString())
    })
}
app.get("/users",(req,res)=>{
    readalldata()
    .then(function(data){
        res.send(data)
    })
    // res.send("hello from express")
})
app.listen(3000,()=>{
    console.log("server running on port 3000");
})