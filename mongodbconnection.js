const {MongoClient} = require('mongodb');
const url='mongodb://127.0.0.1:27017';
const database='e-com';
const client=new MongoClient(url);


async function getdata(){
    let result= await client.connect();
    let db=result.db(database);
    let collection=db.collection('products');
    let response=await collection.find({}).toArray();
    console.log(response);
};

getdata();