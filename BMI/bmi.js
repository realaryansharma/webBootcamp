const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended : true}))

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post("/", function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height * height);
    res.send(req.body.firstname + " your BMI is " + bmi.toFixed(2));
    console.log(req.body)
    console.log(req.body.weight)
})

app.listen(3000, function() {
    console.log("Hey, the server is running!");
})