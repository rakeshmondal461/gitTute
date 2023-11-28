import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("testing request");
  res.send("Test Github");
});

app.listen(6001);
