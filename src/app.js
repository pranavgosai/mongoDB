const express = require("express");
const path = require("path");
require("./db/conn")
const hbs = require("hbs");
const Register = require("./models/register");

const app = express();

const port = process.env.PORT || 30000;

const static_path = path.join(__dirname, "../public") 
const d_path = path.join(__dirname, "../views") 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path))
app.use(express.static(d_path))
app.set("view engine","hbs");

app.get("/",(req,res)=>{
    res.render("index")
});
app.post("/index",async (req,res)=>{
    try{
       const registerEmpoyee = new Register({
        username: req.body.username,
        password: req.body.password,
        
       })
        const registerd = await registerEmpoyee.save();
        res.status(201).render("index");
    }catch(error){
        res.status(400).send(error);
    }
}); 



app.listen(port,()=>{
    console.log(`server is running on port no ${port}`);
}); 
