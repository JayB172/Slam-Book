const express = require("express");
const BodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));
app.set("view engine" , "ejs");
app.use(BodyParser.urlencoded({extended: true}));


// mongoose.connect("mongodb://localhost:27017/SlamBookUsers", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });
// const userSchema = new mongoose.Schema({
//       email : String,
//       password : String
//   })
// const User = new mongoose.model("user" , userSchema);
app.get("/" , function(req , res){
    res.render("home");
});
app.get ("/login" , function(req ,res){
  res.render("login");
});

app.get("/Signup" , function(req , res){
    res.render("Signup");
});

app.listen(3000, function(){
    console.log("Server is started")
});