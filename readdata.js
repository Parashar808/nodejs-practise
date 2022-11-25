const dbConnect=require('./mongodb');

const main = async()=>{
    let data=await dbConnect();
    data= await data.find().toArray();
    console.warn(data);
}
main();

//old method
// dbConnect().then((resp)=>{
//     resp.find({name:'12pro'}).toArray().then((data)=>{
//         console.warn(data);

//     })
// })
