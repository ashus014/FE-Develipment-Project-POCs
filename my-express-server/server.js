const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Hello Contact");
});

app.get("/about", function(req, res){
    res.send("Hi, this is Ashu");
});

app.get("/hobbies", function(req, res){
    res.send("Financial Markets, Bitcoins, Running Marathon, Coding, YouTube");
});

app.listen(3000, function(){
    console.log("server stated on port 3000");
});