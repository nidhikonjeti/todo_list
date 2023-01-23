//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js")
let workItems=["work"];

const app=express();
let items= ["buy food",
"coook foood",
"eattt food"];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.get("/",function(req,res){
   let day=date();
    res.render("list",{listTitle:day,newitems:items});
});
app.post("/",function(req,res){
    console.log(req.body.list);
  let item=req.body.newitem;
  if(req.body.list === "work List"){
        workItems.push(item);
        res.redirect("/work")
}
else{
    items.push(item);
    res.redirect("/");
}
  
});
app.get("/work",function(req,res){
    res.render("list",{listTitle:"work List",newitems:workItems})
})

app.get("/about",function(req,res){
    res.render("about")
})


app.listen(3000,function(){
    console.log("hey");

});