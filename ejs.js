const express=require('express');
const path=require('path');
const app= express();
const publicpath=path.join(__dirname,'public');

app.set('view engine','ejs');
app.get('/profile',(req,resp)=>{
    const user={
        name:'parashar',
        age:'22',
        skills:['php','python','java']
    }
    resp.render('profile',{user});
});
// app.use(express.static(publicpath)); we dont use this becuase we need to add .html extension everytime

app.get('/login',(req,resp)=>{
    resp.render('login');
});

app.get('',(req,resp)=>{
    resp.sendFile(`${publicpath}/index.html`)
});

app.get('/home',(req,resp)=>{
    resp.sendFile(`${publicpath}/home.html`)
});

app.get('*',(req,resp)=>{
    resp.sendFile(`${publicpath}/404.html`)
});

app.listen(5000);