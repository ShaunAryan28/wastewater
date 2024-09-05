const express=require("express");
const parser=require("body-parser");

const app=express();
app.use(parser.urlencoded({extended:true})); //urlencoded to parse the data from the html form. Extended to allow to post nested objects.

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html"); //__dirname gives file path of current file
});

app.get("/BODs",function(req,res){
    res.sendFile(__dirname+"/BODs.html"); //__dirname gives file path of current file
});


app.post("/BODs",function(req,res){
    var D1=Number(req.body.D1);
    var D2=Number(req.body.D2);
    var D2=Number(req.body.D2);
    var SV=Number(req.body.SV);
    var BODseeded= ((D1-D2)/SV)*300;
    res.send("The calculated BOD(seeded) is : "+BODseeded+"ml");
})

app.listen(3000,function(){
    console.log("http://localhost:3000");
});