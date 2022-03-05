
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){

    //res.send("Hello");
    var today = new Date();

    if(today.getDay() === 6 || today.getDay() ===0){
        res.sendFile(__dirname + "/index.html");
    }
    else{
        res.send("Today is weekend");
    }

});


app.listen(3000, function(){

    console.log("Server started on port 3000");
});