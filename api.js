const express = require('express');
const dbConnect=require('./mongodb');
const mongodb=require('mongodb'); //delete
const app=express();
app.use(express.json());        //for post 

app.get('/',async(req,resp)=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    resp.send(data);
})

app.post('/',async(req,resp)=>{
    console.log(req.body);
    let data=await dbConnect();
    let result=await data.insert(req.body); 
    resp.send(result);

})
app.put('/',async(req,resp)=>{
    console.log(req.body);
    let data=await dbConnect();
    let result=await data.updateOne(
        {name:req.body.name},
        {$set:req.body}
        ); 
    resp.send(result);

})

app.delete('/:id',async(req,resp)=>{
    console.log(req.params.id);
    let data=await dbConnect();
    const result=data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})

    resp.send(result);

})


app.listen(5000);