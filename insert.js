const dbConnect=require('./mongodb');
const insert=async()=>{
    const db=await dbConnect();
    const result=await db.insert([
        {
        name:"14pro",
        brand:"apple",
        price:300000
    },
    {
        name:'something',
        brand:'abc',
        price:'100'
    }
    
])
    if(result.acknowledged){
    console.log("inserted successfully!");
    }

}
insert();