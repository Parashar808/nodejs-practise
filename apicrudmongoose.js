const express=require('express');
const mongoose = require('mongoose');
const app=express();
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/e-com");
const productschema = new mongoose.Schema({
        name: String,
        brand: String,
        price: Number

    });
const productmodel = mongoose.model('products', productschema);
app.post('/',async(req,resp)=>{
    let data=new productmodel(req.body);
    let result=await data.save();
    console.log(result);
     resp.send("done");
});

app.get('/list',async(req,resp)=>{
    let data=await productmodel.find();
    resp.send(data);
})

app.delete('/delete/:_id',async(req,resp)=>{
    let data=await productmodel.deleteOne(req.params);
    console.log(data);
})

app.put('/update/:_id',async(req,resp)=>{
    let data=await productmodel.updateOne(
        req.params,
        {
            $set:req.body
        });
        resp.send(data);
    })

    


app.listen(5000);
