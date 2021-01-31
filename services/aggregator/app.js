const express = require("express");
const app = express();
const port = process.env.PORT ?? 3000;

app.get("/am-i-up", (req, res) => {
  res.json("Ok");
});

app.listen(port, () => {
  console.log(`Aggregator app listening at http://localhost:${port}`);
});
