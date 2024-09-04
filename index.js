const express=require("express");
const parser=require("body-parser");

const app=express();
app.use(parser.urlencoded({extended:true})); //urlencoded to parse the data from the html form. Extended to allow to post nested objects.

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html"); //__dirname gives file path of current file
});

app.post("/",function(req,res){
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var o=req.body.o;
    if(o==="1"){
        res.send("The answer is: "+(n1+n2));
    }
    else if(o==="2"){
        res.send("The answer is: "+(n1-n2));
    }
    else if(o==="4"){
        res.send("The answer is: "+(n1*n2));
    }
    else if(o==="3"){
        res.send("The answer is: "+(n1/n2));
    }
    else{
        res.send("Incorrect operator number entered!");
    }
});

app.get("/BODseeded",function(req,res){
    res.sendFile(__dirname+"/BODseeded.html");
});

app.post("/BODseeded",function(req,res){
    var D1=Number(req.body.D1);
    var D2=Number(req.body.D2);
    var D2=Number(req.body.D2);
    var SV=Number(req.body.SV);
    var BODseeded= ((D1-D2)/SV)*300;
    res.send("The calculated BOD(seeded) is : "+BODseeded+"ml");
})

app.listen(3000,function(){
    console.log("Server active on port 3000");
});