// Backend code

// https://sum-server.100xdevs.com/sum?a=1&b=2

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});

app.listen(3000);
