let a=10;
let b=0;
let waitingdata=new Promise((reslove,reject)=>{
    setTimeout(() => {
        reslove(30);
    }, 2000);
})

waitingdata.then((data)=>{
    b=data;
    console.log(a+b);
});