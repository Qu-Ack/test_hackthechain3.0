const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("ZORAB ISS LOSTING!");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("server started on port 3000");
});
