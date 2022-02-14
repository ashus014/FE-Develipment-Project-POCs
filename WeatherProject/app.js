const { response } = require("express");
const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=bffebb15db4f0320ddf98168f18e79a9&units=metric";
    
    https.get(url, function(response){
        console.log(response.statusCode);
        
        response.on("data", function(data){

            //console.log(data);
            const weatherData = JSON.parse(data);
            console.log(weatherData);

            const temp = weatherData.main.temp;
            console.log(temp);
        });

    });

    res.send("Server is up and running");
});

app.listen(3000, function(){

    console.log("Server started on Port 3000");
});