const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const memes = require("./memeCollection");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET");
    return res.status(200).json({});
  }
  next();
});

app.get("/memes", (req, res) => {
  res.send(memes);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
