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

app.get('/search/:key',async(req,resp)=>{
    console.log(req.params.key);
    let data=await productmodel.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}} //also searches that keyin brand
            ]
        }
    )
    console.log(data);
})
app.listen(5000);