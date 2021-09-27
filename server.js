const express = require("express");
const app = express();
var ip = require("ip");

let appPort = process.env.APPPORT || 80;

app.listen(appPort, () => {
  console.log(`Server is up and running on port ` + appPort);
});

app.get("/", (req, res) => {
  res.send(ip.address());
});

