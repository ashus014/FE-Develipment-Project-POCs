const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { options } = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us14.api.mailchimp.com/3.0/lists/951c12adf9";
    const options = {

        method: "POST",
        auth: "ashu1:8ccc288f469f68faa8d605ddc5e4d721-us14"
    };

    const request = https.request(url, options, function(response){

        response.on("data", function(){
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();

});

app.listen(3000, function(){

    console.log("Server started at port 3000");
});

//8ccc288f469f68faa8d605ddc5e4d721-us14
//951c12adf9