module.exports= reqFilter=(req,resp,next)=>{
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