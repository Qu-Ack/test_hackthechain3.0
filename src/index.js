const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("dkashgskg is working hellodsafkhagshdl");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("server started on port 3000");
});
