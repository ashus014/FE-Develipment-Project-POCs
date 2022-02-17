const { response } = require("express");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html");   
});

app.post("/", function(req, res){

    const query = req.body.cityName;
    const apiKey = "bffebb15db4f0320ddf98168f18e79a9";
    const unit= "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    
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
            res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celcius</h1>");
            res.write("<img src=" + imageURL + ">");
            
            res.send();
        });
    });

});

app.listen(3000, function(){

    console.log("Server started on Port 3000");
});