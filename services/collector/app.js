const express = require("express");
const app = express();
const port = process.env.PORT ?? 3000;

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

app.get("/am-i-up", (req, res) => {
  res.json("Ok");
});

app.get("/infected/city/:city/", (req, res) => {
  res.json({
    "source-a": randomNumber(400, 1000),
    "source-b": randomNumber(400, 1000),
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
