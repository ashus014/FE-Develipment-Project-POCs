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

            const icon = weatherData.weather[0].icon;

            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

            res.write("<p>Hi, this is Ashu Singh Weather Forecast<p>");
            res.write("<h1>The temperature in Chennai is " + temp + " degrees Celcius</h1>");
            res.write("<img src=" + imageURL + ">");
            
            res.send();
        });
    });
});

app.listen(3000, function(){

    console.log("Server started on Port 3000");
});