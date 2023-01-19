const express=require("express")//express tutorial
const app=express()
const port=3000
//setting view engine
app.set('view engine', 'ejs');
// public folder
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
// home route
app.get("/",(req,res)=>{
    res.send("Hello World!")
});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
}
)