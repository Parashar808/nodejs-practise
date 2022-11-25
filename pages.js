const express = require('express');
const app=express();


app.get('',(req,resp)=>{
    console.log("data sent from browser =", req.query); //http://localhost:4000/?name=parashar
    // resp.send("Home page "+ req.query.name);
    resp.send(`
    <h1>home page</h1>
    <a href='/about'>About</a>
    `)
});

app.get('/about',(req,resp)=>{
    resp.send(`
    <input type="text" placeholder="name" value="${req.query.name}">
    <button>Click me</button>
    `);
});

app.get('/jsonpage',(req,resp)=>{
    resp.send([{
        name:'parashar',
        email:'parashar@gmail.com'
    },
    {
        name:'ram',
        email:'ram@gmail.com'

    }
])
})
app.listen(4000);