const express=require('express');
const app=express();

const reqFilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("please enter the age");      //age chai url batai send garne localhost:5000?age=20
    }
    else if(req.query.age<18){
        resp.send("you cant access if u r smaller than 18 years");

    }
    else{
        next();
    }
}
app.use(reqFilter);
app.get('/',(req,resp)=>{                       //aafai bhnxa ,xuttai html file chaidaina
    resp.send("index page");

})
app.get('/profile',(req,resp)=>{
    resp.send("profile page");
})

app.listen(5000);