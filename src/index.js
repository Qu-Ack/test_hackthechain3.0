const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("ZORBA is working!");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("server started on port 3000");
});
