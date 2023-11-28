import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("hello test at line 6");
  res.send("Test Github");
});

app.listen(6001);
