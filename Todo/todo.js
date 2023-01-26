const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

// rendering the header and footer
app.get("/",function(req,res){
    res.render("list");
  
    }
);

// listening to the port
const port=process.env.PORT || 3000;
app.listen(port,function(){
    console.log("server started");
});