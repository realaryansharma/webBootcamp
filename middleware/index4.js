import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended :  true}))

function getFullName(req, res, next) {
  var ans = req.body.street + req.body.pet;
  res.send(`<h1>${ans}</h1>`);
  next();
}

app.use(getFullName);

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>${getFullName}</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
