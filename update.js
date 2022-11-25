const dbConnect=require('./mongodb');
const updatedata=async()=>{
    let data=await dbConnect();
    let result=await data.updateOne(
        {name:'note 10'},{
            $set:{name:'note 9',price:50000}
        }
    );
        console.warn(result);
}
updatedata();
