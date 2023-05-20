const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/hello", (req, res) => {
  res.send("hello world!!!");
});

app.post("/hello", (req, res) => 
  res.send(`Hello ${req.body.name}!`));

app.listen(8000, () => {
  console.log("listening on port 3000");
});

