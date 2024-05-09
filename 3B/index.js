const dbConnect = require("./mongodb")
const express = require("express"); 
const response= require("express");
const app=express();
app.use(express.json())
//get API

app.get('/',async(req, res)=>{
let result=await dbConnect();
result=await result.find().toArray();
res.send(result);
})
app.listen(3000);

app.post("/",async(req, res)=>{
    let result= await dbConnect();
    result= await result.insertOne(req.body);
    res.send("Data inserted Successfully");
})

// PUT API
app.put('/:name', async(req, res) => {
    
    let result = await dbConnect();
    result = await result.updateOne({name:req.params.name}, {$set:req.body});
    res.send("Data  updated successfully");
})

// DELETE API
app.delete("/:name", async(req, res) => {
    
    let result = await dbConnect();
    result = await result.deleteOne({name:req.params.name});
    res.send("Data  deleted successfully");
})