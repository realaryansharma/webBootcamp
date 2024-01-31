import express from "express";

const app = express();
const port = 3000;



app.get("/", (req, res) => {
    const d = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[d.getDay()];
    console.log(day);
    var dt;
    var ad;
    if(day == "Sunday" || day == "Saturday") {
        dt = "a weekend";
        ad = "it's time to enjoy the life";
    }
    else {
        dt = "a weekday";
        ad = "it's time to work youa Ass off!";
    }

    res.render("index.ejs", {
        dayType: dt,
        advice: ad
    });
    
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});