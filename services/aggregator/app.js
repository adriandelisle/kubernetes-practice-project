const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT ?? 3000;

const collector_url = process.env.COLLECTOR_URL ?? "localhost:3000";

app.get("/am-i-up", (req, res) => {
  res.json("Ok");
});

app.get("/average/city/:city", async (req, res) => {
  try {
    const { city } = req.params;

    const { data } = await axios.get(
      `http://${collector_url}/infected/city/${city}`
    );
    const sources = Object.keys(data);
    const total = Object.values(data).reduce((acc, curr) => acc + curr, 0);

    const average = Math.ceil(total / sources.length);

    const responseData = {
      city: city,
      infected: average,
      time: new Date().toISOString(),
      sources: sources,
    };

    res.json(responseData);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.toString() });
  }
});

app.listen(port, () => {
  console.log(`Aggregator app listening at http://localhost:${port}`);
});
