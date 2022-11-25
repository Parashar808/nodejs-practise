const express=require('express');
const app=express();

// const reqFilter=(req,resp,next)=>{
//     if(!req.query.age){
//         resp.send("please enter the age");      //age chai url batai send garne localhost:5000?age=20
//     }
//     else if(req.query.age<18){
//         resp.send("you cant access if u r smaller than 18 years");

//     }
//     else{
//         next();
//     }
// }
// app.use(reqFilter); this is appliction level middleware yo garda sab ma hunchha tara profile ma jasto individual pani garna milcha

const reqFilter= require('./middleware1');   //middleware1.js
const route=express.Router();   //1
route.use(reqFilter);           //2 ,these 1 and 2 with route. in front of url is used and //3 app.use(/route) is used for providing middleware individually 

app.get('/',(req,resp)=>{                       //aafai bhnxa ,xuttai html file chaidaina
    resp.send("index page");

})
app.get('/profile',reqFilter,(req,resp)=>{    //route level middleware
    resp.send("profile page");
})

route.get('/help',(req,resp)=>{
    resp.send("help page");
})
app.use('/',route); //3
app.listen(5000);