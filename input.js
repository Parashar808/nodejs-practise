const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'files');
// for(i=0;i<=4;i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","a file ");
// }



// fs.readdir(dirPath,(err,files)=>{
//     console.warn(files);
// })



fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
            console.log('the file name is',item);
    })
    
})








// const fs=require('fs');
// const input = process.argv;
// if(input[2]=='add'){
// fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);

// }
// else{
//     console.log("Invalid bhayo");
// }
