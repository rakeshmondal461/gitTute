import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Test Github");
});

app.listen(6001);
