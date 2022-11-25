const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'crud');
const filepath=`${dirPath}/file1.txt`;

//create
// fs.writeFileSync(filepath,'This is first line');

//read
// fs.readFile(filepath,'utf-8',(err,item)=>{
//     console.log(item);
    
// });

//update
// fs.appendFile(filepath,' and this is second line. ',(err)=>{
//     if(!err) console.log("updated successfully!");
// });

//rename
// fs.rename(filepath,`${dirPath}/file2.txt`,(err)=>{
//     if(!err) console.log("renamed successfully!");
// });

//delete
// fs.unlinkSync(`${dirPath}/file2.txt`);