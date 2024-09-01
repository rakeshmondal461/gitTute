import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("hello test at line 6");
  console.log("hello test at line 7");
  res.send("Test Github");
});

app.listen(6001);
